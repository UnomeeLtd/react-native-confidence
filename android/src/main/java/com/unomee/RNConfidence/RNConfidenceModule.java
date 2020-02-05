package com.unomee.RNConfidence;

import android.bluetooth.BluetoothAdapter;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.os.Build;
import android.provider.Settings.Secure;

import com.google.android.gms.iid.InstanceID;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.TimeZone;

import javax.annotation.Nullable;

public class RNConfidenceModule extends ReactContextBaseJavaModule {

  ReactApplicationContext reactContext;
  String build_env;

  public RNConfidenceModule(ReactApplicationContext reactContext, String buildEnv) {
    super(reactContext);
    this.reactContext = reactContext;
    this.build_env = buildEnv;
  }

  @Override
  public String getName() {
    return "RNConfidence";
  }

  @Override
  public @Nullable Map<String, Object> getConstants() {
    HashMap<String, Object> constants = new HashMap<String, Object>();
    constants.put("BUILD_ENV", build_env);

    return constants;
  }
}
