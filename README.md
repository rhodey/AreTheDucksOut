Are the Ducks Out?
==========
  
HTTP-based (non-invasive) duck monitoring. Only meta-data pertaining
to the boolean status of the ducks occupacy of the duck cage is
"collected". The content of the duck's lives outside or inside their
cage is not "collected" nor is it of interest to this government.  
  
## API
  
```javascript
  location: a string representing a location (eg. tardisfarm, hearth, etc).
  status:   the string "YES", "NO", or "UNKNOWN".

  HTTP GET: /api/location/status
    returns the status of the ducks at location.
  
  HTTP GET: /api/location/status/yes
    sets the status of the ducks at location to "YES".
  
  HTTP GET: /api/location/status/no
    sets the status of the ducks at location to "NO".
```
  
## License  

(The Duck License)  

Copyright (c) 2013 rhodey rhodey@anhonesteffort.org & miloh  

Permission is hereby granted, free of charge, to any person owning or
with the intention of owning ducks to deal in the Software without
restriction, including without limitation the rights to use, copy, modify,
merge, publish, distribute, sublicense, and/or sell copies of the
Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

The person(s) dealing in the Software care for their ducks responsibly.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.