// (function () {
// 	let alreadyInsertedMetaTag = false
// 	function __insertDappDetected() {
// 		if (!alreadyInsertedMetaTag) {
// 			const meta = document.createElement('meta')
// 			meta.name = 'dapp-detected'
// 			document.head.appendChild(meta)
// 			alreadyInsertedMetaTag = true
// 		}
// 	}
// 	if (window.hasOwnProperty('web3')) {
// 		// Note a closure can't be used for this var because some sites like
// 		// www.wnyc.org do a second script execution via eval for some reason.
// 		window.__disableDappDetectionInsertion = true
// 		// Likely oldWeb3 is undefined and it has a property only because
// 		// we defined it. Some sites like wnyc.org are evaling all scripts
// 		// that exist again, so this is protection against multiple calls.
// 		if (window.web3 === undefined) {
// 			return
// 		}
// 		__insertDappDetected()
// 	} else {
// 		var oldWeb3 = window.web3
// 		Object.defineProperty(window, 'web3', {
// 			configurable: true,
// 			set: function (val) {
// 				if (!window.__disableDappDetectionInsertion)
// 					__insertDappDetected()
// 				oldWeb3 = val
// 			},
// 			get: function () {
// 				if (!window.__disableDappDetectionInsertion)
// 					__insertDappDetected()
// 				return oldWeb3
// 			}
// 		})
// 	}
// })()
// document.addEventListener("DOMContentLoaded", event=>{
// 	const app= firebase.app();
// })

// function googleLogin(){
// 	const provider=new firebase.auth.GoogleAuthProvider();
// 	firebase.auth().signInWithPopup(provider)
// 	.catch(console.log)
// }
$(document).on("pagecreate", "#mainp", function () {
	$(document).on("swiperight", "#mainp", function (e) {
		if ($(".ui-page-active").jqmData("panel") !== "open") {
			if (e.type === "swiperight") {
				$(".left-panel").panel("open");
			}
		}
	});
});
$(document).on("pagecreate", "#yourapp", function () {
	$(document).on("swiperight", "#yourapp", function (e) {
		if ($(".ui-page-active").jqmData("panel") !== "open") {
			if (e.type === "swiperight") {
				$(".left-panel").panel("open");
			}
		}
	});
});
$(document).on("pagecreate", "#rec", function () {
	$(document).on("swiperight", "#rec", function (e) {
		// We do this by checking the data that the framework stores on the page element (panel: open).
		if ($(".ui-page-active").jqmData("panel") !== "open") {
			if (e.type === "swiperight") {
				$(".left-panel").panel("open");
			}
		}
	});
});
