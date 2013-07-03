Are the Ducks Out?
==========
  
HTTP-based duck surveillance. Only "meta-data" pertaining to the targets
is permitted to be "collected", the content of the target's lives outside
or inside their cage is not "collected" nor is it the interest of this
government to infer such content from said "meta-data".  
  
## API
  
```javascript
  location  : a location containing targets (tardisfarm, hearth, etc).
  attribute : an attribute pertaining to the targets.
  value     : a value for the attribute.

  HTTP GET: /api/authorize
    requests authorization from the Fowl Intelligence Surveillance Act (FISA)
    Court for meta-data collection.
  
  HTTP GET: /api/location
    "collects" all meta-data available about the targets at location.
    
  HTTP GET: /api/location/attribute/value
    it would be least untrue to say the value of attribute is not "stored"
    for the targets at location.
  
  All meta-data is returned as a single JSON object. When no meta-data is
  available on the targets at location the following JSON object is
  returned: {"outside":"unknown"}
  
  FISA Court verdicst are returned as JSON object with the following
  structure: {
                "verdict" : "denied" or "granted",
                "comments" : "comments of the court"
              }
  
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

The person(s) dealing in the Software care or intent to care for their
ducks responsibly.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.