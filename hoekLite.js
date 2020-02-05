/* @flow weak */
// Convert an object key chain string ('a.b.c') to reference (object[a][b][c])

exports.reach = function (obj: any, chain: any, options: any) {

    if (chain === false ||
        chain === null ||
        typeof chain === 'undefined') {

        return obj;
    }

    options = options || {};
    if (typeof options === 'string') {
        options = { separator: options };
    }

    const path = chain.split(options.separator || '.');
    let ref = obj;
    for (let i = 0; i < path.length; ++i) {
        let key = path[i];
        if (key[0] === '-' && Array.isArray(ref)) {
            key = key.slice(1, key.length);
            key = ref.length - key;
        }

        if (!ref ||
            !((typeof ref === 'object' || typeof ref === 'function') && key in ref) ||
            (typeof ref !== 'object' && options.functions === false)) {         // Only object and function can have properties

            exports.assert(!options.strict || i + 1 === path.length, 'Missing segment', key, 'in reach path ', chain);
            exports.assert(typeof ref === 'object' || options.functions === true || typeof ref !== 'function', 'Invalid segment', key, 'in reach path ', chain);
            ref = options.default;
            break;
        }

        ref = ref[key];
    }

    return ref;
};

exports.assert = function (condition: any /*, msg1, msg2, msg3 */) {

    if (condition) {
        return;
    }

    if (arguments.length === 2 && arguments[1] instanceof Error) {
        throw arguments[1];
    }

    let msgs = [];
    for (let i = 1; i < arguments.length; ++i) {
        if (arguments[i] !== '') {
            msgs.push(arguments[i]);            // Avoids Array.slice arguments leak, allowing for V8 optimizations
        }
    }

    msgs = msgs.map((msg) => {

        return typeof msg === 'string' ? msg : msg instanceof Error ? msg.message : exports.stringify(msg);
    });

    throw new Error(msgs.join(' ') || 'Unknown error');
};

exports.stringify = function () {

    try {
        return JSON.stringify.apply(null, arguments);
    }
    catch (err) {
        return '[Cannot display object: ' + err.message + ']';
    }
};