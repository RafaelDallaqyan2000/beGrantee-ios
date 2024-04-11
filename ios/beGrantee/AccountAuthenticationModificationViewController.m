//
//  AccountAuthenticationModificationViewController.m
//  BeGrantee
//
//  Created by dwavellc on 10.04.24.
//

#import "AccountAuthenticationModificationViewController.h"

@implementation AccountAuthenticationModificationViewController

/*
 Prepare your extension to convert the account with the credential for the given service identifier to
 use Sign in with Apple. If you need additional user authentication before doing the conversion and
 need to show UI, cancel the request with the ASExtensionErrorCodeUserInteractionRequired error code.

- (void)convertAccountToSignInWithAppleWithoutUserInteractionForServiceIdentifier:(ASCredentialServiceIdentifier *)serviceIdentifier existingCredential:(ASPasswordCredential *)existingCredential userInfo:(NSDictionary *)userInfo
{
    BOOL additionalAuthenticationRequired = NO;
    if (additionalAuthenticationRequired)
        [self.extensionContext cancelRequestWithError:[NSError errorWithDomain:ASExtensionErrorDomain code:ASExtensionErrorCodeUserInteractionRequired userInfo:nil]];
    else {
        [self.extensionContext getSignInWithAppleUpgradeAuthorizationWithState:nil nonce:nil completionHandler:^(ASAuthorizationAppleIDCredential *authorization, NSError *error) {
            if (authorization)
                [self.extensionContext completeUpgradeToSignInWithAppleWithUserInfo:nil];
            else
                [self.extensionContext cancelRequestWithError:[NSError errorWithDomain:ASExtensionErrorDomain code:ASExtensionErrorCodeFailed userInfo:nil]];
        }];
    }
}
 */

/*
 Implement this method if -convertAccountToSignInWithAppleWithoutUserInteractionForServiceIdentifier:existingCredential:userInfo:
 can fail with ASExtensionErrorCodeUserInteractionRequired. In this case, the system will call this method and then present your
 extension's UI. Show appropriate UI for authenticating the user and then request the Sign in with Apple authorization.

 - (void)prepareInterfaceToConvertAccountToSignInWithAppleForServiceIdentifier:(ASCredentialServiceIdentifier *)serviceIdentifier existingCredential:(ASPasswordCredential *)existingCredential userInfo:(NSDictionary *)userInfo
{
}
*/

/*
 Prepare your extension to change the credential for the given service identifier to use a new, strong
 password. If you need additional user authentication before doing the conversion and need to show UI,
 cancel the request with the ASExtensionErrorCodeUserInteractionRequired error code.

- (void)changePasswordWithoutUserInteractionForServiceIdentifier:(ASCredentialServiceIdentifier *)serviceIdentifier existingCredential:(ASPasswordCredential *)existingCredential newPassword:(NSString *)newPassword userInfo:(NSDictionary *)userInfo
{
    BOOL additionalAuthenticationRequired = NO;
    if (additionalAuthenticationRequired)
        [self.extensionContext cancelRequestWithError:[NSError errorWithDomain:ASExtensionErrorDomain code:ASExtensionErrorCodeUserInteractionRequired userInfo:nil]];
    else {
        ASPasswordCredential *newCredential = [[ASPasswordCredential alloc] initWithUser:existingCredential.user password:newPassword];
        [self.extensionContext completeChangePasswordRequestWithUpdatedCredential:newCredential userInfo:nil];
    }
}
 */

/*
 Implement this method if -changePasswordWithoutUserInteractionForServiceIdentifier:existingCredential:newPassword:userInfo:
 can fail with ASExtensionErrorCodeUserInteractionRequired. In this case, the system will call this method and then
 present your extension's UI. Show appropriate UI for authenticating the user and then complete the request with the
 associated ASPasswordCredential.

 - (void)prepareInterfaceToChangePasswordForServiceIdentifier:(ASCredentialServiceIdentifier *)serviceIdentifier existingCredential:(ASPasswordCredential *)existingCredential newPassword:(NSString *)newPassword userInfo:(NSDictionary *)userInfo
{
}
*/

/*
 If your extension shows UI and the user taps the system-provided "Cancel" button, your extension UI will be dismissed
 and this method will be called. The default implementation in ASAccountAuthenticationModificationController simply
 cancels the request. If you want to do any cleanup before the request is canceled, you can override this method. Be
 sure to still cancel the request with the ASExtensionErrorCodeUserCanceled error code.

- (void)cancelRequest
{

}
*/

- (IBAction)completeAdditionalAuthentication:(id)sender
{
/*
 Sign in with Apple Conversion:

    [self.extensionContext getSignInWithAppleUpgradeAuthorizationWithState:nil nonce:nil completionHandler:^(ASAuthorizationAppleIDCredential *authorization, NSError *error) {
        if (authorization)
            [self.extensionContext completeUpgradeToSignInWithAppleWithUserInfo:nil];
        else
            [self.extensionContext cancelRequestWithError:[NSError errorWithDomain:ASExtensionErrorDomain code:ASExtensionErrorCodeFailed userInfo:nil]];
    }];

 Strong Password Change:

    ASPasswordCredential *newCredential = [[ASPasswordCredential alloc] initWithUser:_username password:_newPassword];
    [self.extensionContext completeChangePasswordRequestWithUpdatedCredential:newCredential userInfo:nil];
*/
}

@end
