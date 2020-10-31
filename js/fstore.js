//Curated
const curated = document.querySelector('#curated')
const setupCurated = (data) => {
    let html = '';
    if (data.length) {
        data.forEach(doc => {
            const rec = doc.data();
            //console.log(rec)
            var img = '';
            if (rec.Platform.localeCompare("Android") == 0) {
                img = 'img/android.png'
            } else if (rec.Platform.localeCompare("Windows") == 0) {
                img = 'img/windows.png'
            } else if (rec.Platform.localeCompare("Linux") == 0) {
                img = 'img/linux.png'
            } else if (rec.Platform.localeCompare("Mac") == 0) {
                img = 'img/mac.png'
            } else if (rec.Platform.localeCompare("iOS") == 0) {
                img = 'img/ios.png'
            } else {
                img = 'img/other.png'
            }
            const div = `
                <div>
                    <div class="app-ui">    
                        <div class="block-a">
                            <img src="${img}" style="height: 80px; width: 70px;">
                        </div>
                        <div class="block-b">
                            <div class="ui-body ui-body-d"><strong>${rec.Name}</strong></div>
                            <div class="ui-body ui-body-d"><strong>Category : </strong>${rec.Category}</div>
                            <div class="ui-body ui-body-d"><strong>Platform : </strong>${rec.Platform}</div>
                        </div>
                    </div>
                    <div class="app-ui">
                        <a class="ui-btn ui-corner-all ui-shadow ui-btn-b" href="${rec.Link}" style="font-size: 12px;">Download</a>
                    </div>
                </div>  
            `;
            html += div;
        });
        curated.innerHTML = html;
    } else {
        html = `<center><h5>Login to view Curated Apps</h5></center>`
        curated.innerHTML = html;
    }
}
//Your App
function addApp(){
    const newApp= document.querySelector('#new-app');
    const appName=newApp['app-name'].value;
    const platform=newApp['platform'].value;
    const category=newApp['category'].value;
    const source=newApp['source'].value;
    const sourceLink=newApp['sourcelink'].value;
    const desc=newApp['desc'].value;
    console.log(appName, platform, category, source, sourceLink, desc, uid);
    db.collection(uid).add({
        Name:appName,
        Platform:platform,
        Category:category,
        Source:source,
        Link:sourceLink,
        Description:desc
    });
}
const addedApp = document.querySelector('#addedApp')
const setupAddedApp = (data) => {
    let html = '';
    if (data.length) {
        data.forEach(doc => {
            const rec = doc.data();
            // console.log(doc.id);
            docId=doc.id;
            var img = '';
            if (rec.Platform.localeCompare("Android") == 0) {
                img = 'img/android.png'
            } else if (rec.Platform.localeCompare("Windows") == 0) {
                img = 'img/windows.png'
            } else if (rec.Platform.localeCompare("Linux") == 0) {
                img = 'img/linux.png'
            } else if (rec.Platform.localeCompare("Mac") == 0) {
                img = 'img/mac.png'
            } else if (rec.Platform.localeCompare("iOS") == 0) {
                img = 'img/ios.png'
            } else {
                img = 'img/other.png'
            }
            const div = `
            <div>
                <div class="app-ui">    
                    <div class="block-a">
                        <img src="${img}" style="height: 80px; width: 70px;">
                    </div>
                    <div class="block-b">
                        <div class="ui-body ui-body-d"><strong>${rec.Name}</strong></div>
                        <div class="ui-body ui-body-d"><strong>Category : </strong>${rec.Category}</div>
                        <div class="ui-body ui-body-d"><strong>Platform : </strong>${rec.Platform}</div>
                        <!-- <div class="ui-grid-a">
                            <div class="ui-block-a"><div class="ui-body ui-body-d"><a class="ui-btn ui-shadow ui-btn-b" href="${rec.Link}" style="font-size: 12px ;" >Details</a></div></div>
                            <div class="ui-block-b"><div class="ui-body ui-body-d"><a class="ui-btn ui-shadow ui-btn-b" href="${rec.Link}" style="font-size: 12px;">Download</a></div></div>
                        </div> -->
                    </div>
                </div>
                <div class="app-ui">
                    <div class="block-a1">
                        <a class="ui-btn ui-corner-all ui-shadow ui-btn-b" style="font-size: 12px ;" onclick="appDelete('${docId}')" >Delete</a>                            
                    </div>
                    <div class="block-b1">
                        <a class="ui-btn ui-corner-all ui-shadow ui-btn-b" href="${rec.Link}" style="font-size: 12px;">Download</a>
                    </div>
                </div>
            </div>
            `;
            html += div;
        });
        addedApp.innerHTML = html;
    } else {
        html = `<center><h5>No Apps Added</h5></center>`
        addedApp.innerHTML = html;
    }
}

function appDelete(docId){
    console.log(docId, uid);
    db.collection(uid).doc(docId).delete().then(function() {
        console.log("App successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing app: ", error);
    });
}