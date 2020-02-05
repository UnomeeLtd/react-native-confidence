//
//  RNConfidence.m
//  RNConfidence
//
//  Created by Aiden Montgomery on 29/11/2016.
//  Copyright © 2016 Constructive Coding Ltd. All rights reserved.
//

#import "RNConfidence.h"

@interface RNConfidence ()

@end

@implementation RNConfidence
{

}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

RCT_EXPORT_MODULE()

- (NSDictionary *)constantsToExport {
  NSDictionary *infoDictionary = [[NSBundle mainBundle] infoDictionary];
  
  return @{
    @"BUILD_ENV": [infoDictionary valueForKey:@"BUILD_ENV"],
    @"infoPlist": infoDictionary
  };
}

@end
