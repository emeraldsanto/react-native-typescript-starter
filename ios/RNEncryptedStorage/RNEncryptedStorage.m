//
//  RNEncryptedStorage.m
//  Starter
//
//  Created by Yanick Bélanger on 2020-02-09.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(RNEncryptedStorage, NSObject)

RCT_EXTERN_METHOD(
  store: (NSString *)key
  value: (NSString *)value
  resolver: (RCTPromiseResolveBlock)resolve
  rejecter: (RCTPromiseRejectBlock)reject
);

RCT_EXTERN_METHOD(
  retrieve: (NSString *)key
  resolver: (RCTPromiseResolveBlock)resolve
  rejecter: (RCTPromiseRejectBlock)reject
);

RCT_EXTERN_METHOD(
  remove: (NSString *)key
  resolver: (RCTPromiseResolveBlock)resolve
  rejecter: (RCTPromiseRejectBlock)reject
);

@end
