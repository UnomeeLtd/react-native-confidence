package com.unomee.RNConfidence;

import java.util.Arrays;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.bridge.JavaScriptModule;

public class RNConfidence implements ReactPackage {

  private String buildEnv = "development";

  public RNConfidence(String build_env) {
    this.buildEnv = build_env;
  }
  
  @Override
  public List<NativeModule> createNativeModules(
                              ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();

    modules.add(new RNConfidenceModule(reactContext, this.buildEnv));

    return modules;
  }

  public List<ViewManager> createViewManagers(
                            ReactApplicationContext reactContext) {
  	return Collections.emptyList();
  }

}
