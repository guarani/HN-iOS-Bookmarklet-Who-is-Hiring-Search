Overview
--------

This Safari bookmarklet lets you search the Hacker News Who is Hiring thread using multiple search criteria.

<img src="https://raw.githubusercontent.com/guarani/HN-iOS-Bookmarklet-Who-is-Hiring-Search/master/search.png" alt="Search" width="200px;"/>

<img src="https://raw.githubusercontent.com/guarani/HN-iOS-Bookmarklet-Who-is-Hiring-Search/master/results.png" alt="Result" width="200px;"/>


Instalation
-----------

1. On your iOS device, navigate to the lastest HN Who is Hiring thread (e.g. [June 2016](https://news.ycombinator.com/item?id=11814828)).

2. Tap the Save <img src="https://raw.githubusercontent.com/guarani/HN-iOS-Bookmarklet-Who-is-Hiring-Search/master/save.png" alt="Save" width="20px;"/> icon (then *Add Bookmark* > *Change title to e.g. "HN search"* > *Save*) 

3. Now tap the <img src="https://raw.githubusercontent.com/guarani/HN-iOS-Bookmarklet-Who-is-Hiring-Search/master/bookmark.png" alt="Bookmark" width="20px;"/> icon (find the bookmark, hit *Edit* > *click the bookmark*, in the Address field, delete the contents and paste in the following:

   ```javascript
   javascript:void function(){var e=prompt("Enter keywords:").split(" "),t=document.getElementsByClassName("athing"),n=[];for(var r=0;r<t.length;r++){var i=0;for(var s=0;s<e.length;s++)t[r].innerText.toLowerCase().indexOf(e[s].toLowerCase())>-1&&i++;i==e.length&&n.push(t[r])}var o=function(e){e.onclick=function(){var t=n.indexOf(e),r=t+1,i=n[r];i.scrollIntoView()}};for(var r=0;r<n.length;r++)n[r].style.backgroundColor="orange",o(n[r]);n[0].scrollIntoView()}();
   ```

4. Tap *Done* 3 times to save and exit.

5. To start a search, tap the  <img src="https://raw.githubusercontent.com/guarani/HN-iOS-Bookmarklet-Who-is-Hiring-Search/master/bookmark.png" alt="Bookmark" width="20px;"/> icon, and select *HN search* (or whatever you named the bookmark).

6. A prompt will appear and you can type in your space-dlimited search terms (e.g. "Javascript react"), click *Ok* to search.

7. To go to the next search result, tap the current highlighted result. To start a new search, reload the page and repeat from Step 5.


Contribute
----------

1. Clone the repo:
   `git clone https://github.com/guarani/HN-iOS-Bookmarklet-Who-is-Hiring-Search hn-bookmarklet`
2. Go to the repo:
   `cd hn-bookmarklet`
3. Make changes to `hn.js`
4. The contents of `hn.js` must be first prepended with `javascript:` before being copied to an iOS bookmark
5. Alternatively, if you have [UglifyJS](https://github.com/mishoo/UglifyJS) installed, run the following command to take `hn.js`, minify it, and prepend the `javascript:` string, and place the result in `hn.min.js`:

   `var=$(uglifyjs hn.js); echo "javascript:"${var/void\ /void } > hn.min.js`
6. **Pull requests welcome!**




