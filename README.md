# Flickr Rainbow

This is a simple project that search for something on flickr and get you a rainbow of it.

To clone it:

```
git clone https://github.com/jgmurillo10/exam1web.git myApp
cd myApp
echo "my_flickr_api_key" > server/api_key.txt
echo "my_flickr_api_secret" > server/api_secret.txt
npm install
```
I have my own key and secret setup but aren't public, so try with yours.
You can [get your Flickr api key and secrets here](https://www.flickr.com/services/apps/create/)


Then compile the front-end into the build folder using

```
npm run build
```

And finally run the server

```
node server
```
And open [http://localhost:9000](http://localhost:9000)

# Toque de creatividad
Se evidencia en las fuentes usadas, la distribución de los elementos, su usabilidad y la organización de la galería de fotos sin espaciado que es más agradable a la vista. Esta distribución se presta para hacer un botón de load more al final y que de movimiento y continuidad a la galería.
