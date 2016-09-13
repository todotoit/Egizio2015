# La spedizione di egizio 2015

### index.html

- è la pagina principale del progetto nella quale vengono caricati i vari partials
- qui vengono caricati anche gli script e le dipendenze dell'angular app
- Potete caricare ulteriori dipendenze (js/css) in questa pagina


### tappax/

- per la home page e per ogni tappa è stata creata una sotto-directory 
	
	<pre><code>partials/home/
	partials/tappa1/
	partials/tappa2/
	partials/tappa3/
	partials/tappa4/
	partials/tappa5/</code></pre>
	
- ogni sotto-directory contiene tre file .html 
	
	<pre><code>pretour.html -> tappa futura
	intour.html -> tappa attuale
	endtour.html -> tappa conclusa</code></pre>


## gestione localizzazione

- per la localizzazione dei testi vengono utilizzati due file json 

	<pre><code>languages/it.json
	languages/en.json</code></pre>

- struttura .json

	<pre><code>{
		"KEY": "VALUE",
		"KEY2": "VALUE2"
 	}</code></pre>

- per la gestione della localizzazione all'interno dei partials html

	<pre><code>translate="{{ 'KEY' }}" -> usato come attributo

	ng-click="changeLanguage('it')" -> usato come attributo richiama la funzione per il cambio lingua</code></pre>

