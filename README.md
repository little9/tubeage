# :tv: tubeage :tv:
A node.js command line utility that takes a YouTube embed code and returns a thumbnail link to that video

You can install it from npm:
```bash
npm install -g tubeage
```


## Usage 
``` bash
tubeage 0j1KA8YlZ0w
```

Output:
``` html 
<a href="https://www.youtube.com/watch?v=0j1KA8YlZ0w"><img src="http://img.youtube.com/vi/0j1KA8YlZ0w/default.jpg"/></a>
```

Rendered result:

<a href="https://www.youtube.com/watch?v=0j1KA8YlZ0w"><img src="http://img.youtube.com/vi/0j1KA8YlZ0w/default.jpg"/></a>

You can also access different quality thumbnails:

``` bash
tubeage 0j1KA8YlZ0w mq
```
<a href="https://www.youtube.com/watch?v=0j1KA8YlZ0w"><img src="http://img.youtube.com/vi/0j1KA8YlZ0w/mqdefault.jpg"/></a>

The options are: 

* mq - medium quality
* hq - high quality
* max - maximum quality
* sd - standard definition quality
