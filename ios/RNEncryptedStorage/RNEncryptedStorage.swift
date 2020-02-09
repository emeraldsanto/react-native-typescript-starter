//
//  RNEncryptedStorage.swift
//  Starter
//
//  Created by Yanick Bélanger on 2020-02-09.
//  Copyright © 2020 Facebook. All rights reserved.
//

import Foundation
import Security

@objc
class RNEncryptedStorage: NSObject {
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return false;
  }
  
  @objc func store(_ key : String, value : String, resolver resolve : RCTPromiseResolveBlock, rejecter reject: RCTPromiseRejectBlock) -> Void {
    guard let dataFromValue = value.data(using: .utf8, allowLossyConversion: false) else {
      return reject("");
    }
    
    // Prepares the insert query structure
    let storeQuery : [String : String] = [
      kSecClass : kSecClassGenericPassword,
      kSecAttrAccount : key,
      kSecValueData : value
    ];
    
    // Deletes the existing item prior to inserting the new one
    SecItemDelete(storeQuery);
    
    let status = SecItemAdd(storeQuery, nil);
    
    if (status == noErr) {
      resolve(value);
    }
    
    else {
      reject("An error occured while saving \(key)");
    }
  }
  
  @objc
  func retrieve(_ key : String, resolver resolve : RCTPromiseResolveBlock, rejecter reject : RCTPromiseRejectBlock) {
    let retrieveQuery : [String : String] = [
      kSecClass : kSecClassGenericPassword,
      kSecAttrAccount : key,
      kSecReturnData : kCFBooleanTrue!,
      kSecMatchLimit : kSecMatchLimitOne
    ];
    
    var dataRef : AnyObject? = nil;
    
    let status = SecItemCopyMatching(retrieveQuery as CFDictionary, &dataRef);
    
    if (status == noErr) {
      let stringValue = String(data : (dataRef as! Data?)!, encoding: .utf8)!;
      resolve(stringValue);
    }
    
    else {
      reject("An error occured while retrieving \(key)");
    }
  }
  
  @objc
  func remove(_ key : String, resolver resolve : RCTPromiseResolveBlock, rejecter reject : RCTPromiseRejectBlock) {
    let removeQuery : [String : String] = [
      kSecClass : kSecClassGenericPassword,
      kSecAttrAccount : key,
      kSecReturnData : kCFBooleanTrue!
    ];
    
    let status = SecItemDelete(removeQuery as CFDictionary);
    
    if (status == noErr) {
      resolve(key);
    }
    
    else {
      reject("An error occured while removing \(key)");
    }
  }
}
