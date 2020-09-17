<h1 align="center">Welcome to Firebase translation 👋</h1>

<h2 align="center">Install</h2>

`npm install translatefirebase -- save`

<h2 align="center">Example</h2>

```js
import { translatefirebase } from 'translatefirebase';

connection = async (mail, password) => {
		return new Promise(async (resolve, reject) => {
			await firebase
				.auth()
				.signInWithEmailAndPassword(mail, password)
				.then(res => {
					resolve(res);
                })
				.catch(error => {
                    const errorTranslated = translatefirebase(error, 'fr');
                    rej(errorTranslated); //"L'adresse e-mail est mal formatée."
                });
		});

```


<h2 align="center">Docs</h2>

Supported country code for now : 
- 'fr' for french
- 'en' for english
- 'pt' for portuguese