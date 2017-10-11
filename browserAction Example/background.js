function openMyPage() {
  console.log("injecting");
   chrome.tabs.create({
     "url": "https://docs.automic.com/documentation/webhelp/english/ALL/components/AE/9/All%20Guides/Content/uczajy.htm"
   });
}

/*
Add openMyPage() as a listener to clicks on the browser action.
*/
chrome.browserAction.onClicked.addListener(openMyPage);