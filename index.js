const arrayOfLanguages = {
	en: {
		'argument-error': '',
		'app-not-authorized':
			"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
		'app-not-installed':
			'The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.',
		'captcha-check-failed': '',
		'code-expired': '',
		'cordova-not-ready': 'Cordova framework is not ready.',
		'cors-unsupported': 'This browser is not supported.',
		'credential-already-in-use': 'This credential is already associated with a different user account.',
		'custom-token-mismatch': 'The custom token corresponds to a different audience.',
		'requires-recent-login':
			'This operation is sensitive and requires recent authentication. Log in again before retrying this request.',
		'dynamic-link-not-activated':
			'Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.',
		'email-already-in-use': 'The email address is already in use by another account.',
		'expired-action-code': 'The action code has expired. ',
		'cancelled-popup-request': 'This operation has been cancelled due to another conflicting popup being opened.',
		'internal-error': 'An internal error has occurred.',
		'invalid-app-credential': '',
		'invalid-app-id': 'The mobile app identifier is not registed for the current project.',
		'invalid-user-token': "The user's credential is no longer valid. The user must sign in again.",
		'invalid-auth-event': 'An internal error has occurred.',
		'invalid-verification-code': '',
		'invalid-cordova-configuration':
			'The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.',
		'invalid-custom-token': 'The custom token format is incorrect. Please check the documentation.',
		'invalid-email': 'The email address is badly formatted.',
		'invalid-api-key': 'Your API key is invalid, please check you have copied it correctly.',
		'invalid-credential': 'The supplied auth credential is malformed or has expired.',
		'invalid-message-payload':
			'The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.',
		'invalid-oauth-provider':
			'EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.',
		'unauthorized-domain':
			'This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.',
		'invalid-action-code':
			'The action code is invalid. This can happen if the code is malformed, expired, or has already been used.',
		'wrong-password': 'The password is invalid or the user does not have a password.',
		'invalid-identifier-number': '',
		'invalid-recipient-email':
			'The email corresponding to this action failed to send as the provided recipient email address is invalid.',
		'invalid-sender':
			'The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.',
		'invalid-verification-id': '',
		'missing-iframe-start': 'An internal error has occurred.',
		'auth-domain-config-required':
			'Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.',
		'missing-app-credential': '',
		'missing-verification-code': '',
		'missing-identifier-number': '',
		'missing-verification-id': '',
		'app-deleted': 'This instance of FirebaseApp has been deleted.',
		'account-exists-with-different-credential':
			'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.',
		'network-request-failed':
			'A network error (such as timeout, interrupted connection or unreachable host) has occurred.',
		'no-auth-event': 'An internal error has occurred.',
		'no-such-provider': 'User was not linked to an account with the given provider.',
		'operation-not-allowed':
			'The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.',
		'operation-not-supported-in-this-environment':
			'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
		'popup-blocked': 'Unable to establish a connection with the popup. It may have been blocked by the browser.',
		'popup-closed-by-user': 'The popup has been closed by the user before finalizing the operation.',
		'provider-already-linked': 'User can only be linked to one identity for the given provider.',
		'quota-exceeded': '',
		'redirect-cancelled-by-user': 'The redirect operation has been cancelled by the user before finalizing.',
		'redirect-operation-pending': 'A redirect sign-in operation is already pending.',
		'timeout': 'The operation has timed out.',
		'user-token-expired': "The user's credential is no longer valid. The user must sign in again.",
		'too-many-requests': 'We have blocked all requests from this device due to unusual activity. Try again later.',
		'user-cancelled': 'User did not grant your application the permissions it requested.',
		'user-not-found': 'There is no user record corresponding to this identifier. The user may have been deleted.',
		'user-disabled': 'The user account has been disabled by an administrator.',
		'user-mismatch': 'The supplied credentials do not correspond to the previously signed in user.',
		'user-signed-out': '',
		'weak-password': 'The password must be 6 characters long or more.',
		'web-storage-unsupported': 'This browser is not supported or 3rd party cookies and data may be disabled.',
	},
	pt: {
		'argument-error': '',
		'app-not-authorized':
			'Este aplicativo, identificado pelo domínio onde está hospedado, não está autorizado a usar Firebase Authentication com a chave API fornecida.',
		'app-not-installed':
			'A aplicação móvel solicitada correspondente ao identificador (nome do pacote Android ou ID do pacote iOS) fornecido não está instalada neste dispositivo.',
		'captcha-check-failed': '',
		'code-expired': '',
		'cordova-not-ready': 'O framework Cordova não está pronto.',
		'cors-unsupported': 'Este navegador não é suportado.',
		'credential-already-in-use': 'Esta credencial já está associada a uma conta de usuário diferente.',
		'custom-token-mismatch': 'O token personalizado corresponde a um público diferente.',
		'requires-recent-login':
			'Esta operação é sensível e requer autenticação recente. Faça o login novamente antes de tentar novamente esta solicitação.',
		'dynamic-link-not-activated':
			'Ative os links dinâmicos no Firebase Console e concorde com os termos e condições.',
		'email-already-in-use': 'O endereço de e-mail já está em uso por outra conta.',
		'expired-action-code': 'O código de ação expirou.',
		'cancelled-popup-request': 'Esta operação foi cancelada devido a outro popup conflitante sendo aberto.',
		'internal-error': 'Ocorreu um erro interno.',
		'invalid-app-credential': '',
		'invalid-app-id': 'O identificador do aplicativo móvel não está registrado para o projeto atual.',
		'invalid-user-token': 'A credencial do usuário não é mais válida. O usuário deve entrar novamente',
		'invalid-auth-event': 'Ocorreu um erro interno',
		'invalid-verification-code': '',
		'invalid-cordova-configuration':
			'Os seguintes plugins Cordova devem ser instalados para habilitar o OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappflugin-inapbrowser e cordova-plugin-customurlscheme',
		'invalid-custom-token': 'O formato de token personalizado está incorreto. Por favor, verifique a documentação.',
		'invalid-email': 'O endereço de e-mail está mal formatado.',
		'invalid-api-key': 'Sua chave API é inválida, por favor, verifique se você a copiou corretamente.',
		'invalid-credential': 'A credencial automática fornecida está mal formatada ou expirou.',
		'invalid-message-payload':
			'O modelo de e-mail correspondente a esta ação contém caracteres inválidos em sua mensagem. Por favor, corrija indo para a seção Auth email templates no Firebase Console.',
		'invalid-oauth-provider':
			'EmailAuthProvider não é suportado para esta operação. Esta operação suporta apenas provedores OAuth.',
		'unauthorized-domain':
			'Este domínio não é autorizado para operações OAuth para o seu projeto Firebase. Edite a lista de domínios autorizados do console do Firebase.',
		'invalid-action-code':
			'O código de ação é inválido. Isto pode acontecer se o código estiver mal formado, expirar ou já tiver sido usado.',
		'wrong-password': 'A senha é inválida ou o usuário não tem uma senha.',
		'invalid-identifier-number': '',
		'invalid-recipient-email':
			'O e-mail correspondente a esta ação não enviou como o endereço de e-mail do destinatário fornecido é inválido.',
		'invalid-sender':
			'O modelo de e-mail correspondente a esta ação contém um e-mail ou nome do remetente inválido. Por favor, corrija indo para a seção Auth email templates no Firebase Console.',
		'invalid-verification-id': '',
		'missing-iframe-start': 'Ocorreu um erro interno.',
		'auth-domain-config-required':
			'Certifique-se de incluir authDomain ao chamar o Firebase. initializeApp(), seguindo as instruções no console do Firebase.',
		'missing-app-credential': '',
		'missing-verification-code': '',
		'missing-identifier-number': '',
		'missing-verification-id': '',
		'app-deleted': 'Esta instância do FirebaseApp foi excluída.',
		'account-exists-with-different-credential':
			'Já existe uma conta com o mesmo endereço de e-mail, mas com credenciais de login diferentes.',
		'network-request-failed': 'Ocorreu um erro na rede (como timeout, conexão interrompida ou host inalcançável).',
		'no-auth-event': 'Ocorreu um erro interno.',
		'no-such-provider': 'O usuário não foi vinculado a uma conta com o provedor fornecido.',
		'operation-not-allowed':
			'O provedor fornecido está desabilitado para este projeto Firebase. Habilite-o no console do Firebase, na aba método de login da seção Auth.',
		'operation-not-supported-in-this-environment':
			"Esta operação não é suportada no ambiente em que esta aplicação está rodando. 'location.protocol' deve ser http, https ou chrome-extension e o armazenamento web deve estar habilitado.",
		'popup-blocked': 'Incapaz de estabelecer uma conexão com o popup. Pode ter sido bloqueada pelo navegador.',
		'popup-closed-by-user': 'O popup foi fechado pelo usuário antes de finalizar a operação',
		'provider-already-linked': 'O usuário só pode ser vinculado a uma identidade para o provedor dado',
		'quota-exceeded': '',
		'redirect-cancelled-by-user': 'A operação de redirecionamento foi cancelada pelo usuário antes de finalizar',
		'redirect-operation-pending': 'Uma operação de redirecionamento de login já está pendente',
		'timeout': 'A operação foi expirada',
		'user-token-expired': 'A credencial do usuário não é mais válida. O usuário deve fazer o login novamente.',
		'too-many-requests':
			'Bloqueamos todas as solicitações deste dispositivo devido a atividade incomum. Tente novamente mais tarde.',
		'user-cancelled': 'O usuário não concedeu a sua solicitação as permissões que solicitou.',
		'user-not-found':
			'Não há nenhum registro de usuário correspondente a este identificador. O usuário pode ter sido excluído.',
		'user-disabled': 'A conta do usuário foi desabilitada por um administrador.',
		'user-mismatch': 'As credenciais fornecidas não correspondem ao usuário previamente cadastrado.',
		'user-signed-out': '',
		'weak-password': 'A senha deve ter 6 caracteres ou mais.',
		'web-storage-unsupported':
			'Este navegador não é suportado ou cookies e dados de terceiros podem ser desabilitados.',
    },
    fr: {
		'argument-error': '',
		'app-not-authorized':
			"Cette application, identifiée par le domaine où elle est hébergée, n'est pas autorisée à utiliser l'authentification Firebase avec la clé API fournie. Vérifiez votre configuration de clé dans la console API Google.",
		'app-not-installed':
			"L'application mobile demandée correspondant à l'identifiant (nom du package Android ou ID du bundle iOS) fourni n'est pas installée sur cet appareil",
		'captcha-check-failed': '',
		'code-expired': '',
		'cordova-not-ready': "Le framework Cordova n'est pas prêt.",
		'cors-unsupported': "Ce navigateur n'est pas pris en charge.",
		'credential-already-in-use': "Ces informations d'identification sont déjà associées à un autre compte utilisateur.",
		'custom-token-mismatch': "Le token personnalisé correspond à un public différent.",
		'requires-recent-login':
			"Cette opération est sensible et nécessite une authentification récente. Connectez-vous à nouveau avant de réessayer cette demande.",
		'dynamic-link-not-activated':
			"Veuillez activer les liens dynamiques dans la console Firebase et acceptez les termes et conditions.",
		'email-already-in-use': "L'adresse e-mail est déjà utilisée par un autre compte.",
		'expired-action-code': "Le code d'action a expiré.",
		'cancelled-popup-request': "Cette opération a été annulée en raison de l'ouverture d'une autre fenêtre contextuelle en conflit.",
		'internal-error': "Une erreur interne s'est produite.",
		'invalid-app-credential': '',
		'invalid-app-id': "L'identifiant de l'application mobile n'est pas enregistré pour le projet en cours.",
		'invalid-user-token': "Les informations d'identification de l'utilisateur ne sont plus valides. L'utilisateur doit se reconnecter.",
		'invalid-auth-event': "Une erreur interne s'est produite.",
		'invalid-verification-code': '',
		'invalid-cordova-configuration':
			"Les plugins Cordova suivants doivent être installés pour activer la connexion OAuth: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browser-browserab, cordova-plugin-inappbrowser et cordova-plugin-customurlscheme.",
		'invalid-custom-token': "Le format de jeton personnalisé est incorrect. Veuillez consulter la documentation.",
		'invalid-email': "L'adresse e-mail est mal formatée.",
		'invalid-api-key': "Votre clé API n'est pas valide, veuillez vérifier que vous l'avez copiée correctement.",
		'invalid-credential': "Les informations d'authentification fournies sont incorrectes ou ont expiré.",
		'invalid-message-payload':
			"Le modèle d'e-mail correspondant à cette action contient des caractères non valides dans son message. Veuillez corriger en accédant à la section Modèles d'e-mail d'authentification dans la console Firebase.",
		'invalid-oauth-provider':
			"EmailAuthProvider n'est pas pris en charge pour cette opération. Cette opération prend uniquement en charge les fournisseurs OAuth.",
		'unauthorized-domain':
			"Ce domaine n'est pas autorisé pour les opérations OAuth pour votre projet Firebase. Modifiez la liste des domaines autorisés à partir de la console Firebase.",
		'invalid-action-code':
			"Le code d'action n'est pas valide. Cela peut se produire si le code est mal formé, expiré ou a déjà été utilisé.",
		'wrong-password': "Le mot de passe n'est pas valide ou l'utilisateur n'a pas de mot de passe.",
		'invalid-identifier-number': '',
		'invalid-recipient-email':
			"L'e-mail correspondant à cette action n'a pas pu être envoyé car l'adresse e-mail du destinataire fournie n'est pas valide.",
		'invalid-sender':
			"Le modèle d'e-mail correspondant à cette action contient une adresse e-mail ou un nom d'expéditeur non valide. Veuillez corriger en accédant à la section Modèles d'e-mail d'authentification dans la console Firebase.",
		'invalid-verification-id': '',
		'missing-iframe-start': "Une erreur interne s'est produite.",
		'auth-domain-config-required':
			"Assurez-vous d'inclure authDomain lors de l'appel de firebase.initializeApp (), en suivant les instructions de la console Firebase.",
		'missing-app-credential': '',
		'missing-verification-code': '',
		'missing-identifier-number': '',
		'missing-verification-id': '',
		'app-deleted': "Cette instance de FirebaseApp a été supprimée.",
		'account-exists-with-different-credential':
			"Un compte existe déjà avec la même adresse e-mail mais des informations de connexion différentes. Connectez-vous à l'aide d'un fournisseur associé à cette adresse e-mail.",
		'network-request-failed':
			"Une erreur réseau (telle qu'un délai d'expiration, une connexion interrompue ou un hôte inaccessible) s'est produite.",
        'no-auth-event': "Une erreur interne s'est produite.",
		'no-such-provider': "L'utilisateur n'était pas lié à un compte avec le fournisseur donné.",
		'operation-not-allowed':
			"Le fournisseur de connexion indiqué est désactivé pour ce projet Firebase. Activez-le dans la console Firebase, sous l'onglet Méthode de connexion de la section Auth.",
		'operation-not-supported-in-this-environment':
			"Cette opération n'est pas prise en charge dans l'environnement sur lequel cette application s'exécute. 'location.protocol' doit être http, https ou chrome-extension et le stockage Web doit être activé.",
		'popup-blocked': "Impossible d'établir une connexion avec le popup. Il peut avoir été bloqué par le navigateur.",
		'popup-closed-by-user': "La popup a été fermée par l'utilisateur avant de finaliser l'opération.",
		'provider-already-linked': "L'utilisateur ne peut être lié qu'à une seule identité pour le fournisseur donné.",
		'quota-exceeded': '',
		'redirect-cancelled-by-user': "L'opération de redirection a été annulée par l'utilisateur avant la finalisation.",
        'redirect-operation-pending': "Une opération de connexion de redirection est déjà en attente.",
		'timeout': "L'opération a expiré.",
		'user-token-expired': "Les informations d'identification de l'utilisateur ne sont plus valides. L'utilisateur doit se reconnecter.",
		'too-many-requests': "Nous avons bloqué toutes les demandes de cet appareil en raison d'une activité inhabituelle. Réessayez plus tard.",
		'user-cancelled': "L'utilisateur n'a pas accordé à votre application les autorisations demandées.",
		'user-not-found': "Il n'y a pas d'enregistrement d'utilisateur correspondant à cet identifiant. L'utilisateur a peut-être été supprimé.",
		'user-disabled': "Le compte utilisateur a été désactivé par un administrateur.",
		'user-mismatch': "Les informations d'identification fournies ne correspondent pas à l'utilisateur précédemment connecté.",
		'user-signed-out': '',
		'weak-password': "Le mot de passe doit contenir au moins 6 caractères.",
		'web-storage-unsupported': "Ce navigateur n'est pas pris en charge ou les cookies et données tiers peuvent être désactivés.",
	},
};

function translatefirebase(objectToTranslate, countryCode) {
	const languages = Object.keys(arrayOfLanguages);
	if (languages.includes(countryCode)) {
		const errorCode = objectToTranslate.code;
		const specificError = errorCode.substring(errorCode.indexOf('/') + 1, errorCode.length);
        return arrayOfLanguages[countryCode][specificError];
	} else {
		throw 'countryCode not supported';
	}
}

module.exports.translatefirebase = translate-firebase;