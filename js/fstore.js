//Curated
const curated = document.querySelector('#curated')
const setupCurated=(data)=>{
    let html='';
    data.forEach(doc =>{
        const rec= doc.data();
        console.log(rec)
        var img='';
        if(rec.Platform.localeCompare("android")==0){
            img='img/android.png'
        }else if(rec.Platform.localeCompare("windows")==0){
            img='img/windows.png'
        }else if(rec.Platform.localeCompare("linux")==0){
            img='img/linux.png'
        }else if(rec.Platform.localeCompare("mac")==0){
            img='img/mac.png'
        }else if(rec.Platform.localeCompare("ios")==0){
            img='img/ios.png'
        }else{
            img='img/other.png'
        }
        const div= `
            <center>
            <div style="border: 0.1px solid grey;" >
                <a>
                    <table>
                        <tr>
                            <td rowspan="4"><img src="${img}" style="height: 80px; width: 70px;"></td>
                            <td colspan="3"><span><strong>${rec.Name}</strong></span></td>
                        </tr>
                        <tr>
                            <td colspan="3">Category:<span>${rec.Category}</span></span></td>
                        </tr>
                        <tr>
                            <td style="width: 50%;"></td><td></td>
                            <td><a data-mini="true" class="ui-btn ui-shadow ui-btn-b" href="${rec.Link}">Download</a></td>
                        </tr>
                    </table>
                </a>
            </div><br>
            </center>
        `;
        html += div;
    });
    curated.innerHTML = html;
}