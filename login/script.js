

function orderFields() {
    var incB = document.getElementsByClassName("windows");
    var incSelect = document.getElementsByClassName("selectSize");
    var incWei = document.getElementsByClassName("weight");
    var incamt = document.getElementsByClassName("amt");

    for (let z = 0; z < incB.length; z++) {
        incB[z].value = z + 1;
        incSelect[z].id = `s${z + 1}`;
        incWei[z].id = `we${z + 1}`;
        incamt[z].id = `a${z + 1}`;
    }
}


//-------------------------------------------To add fields---------------------------------------------------------------------- 
let k = 2;

function addFields() {
    var mf = document.getElementById("mainFiled");
    var fdiv = document.createElement('div');
    fdiv.classList.add(`inputValue`);
    fdiv.classList.add(`inputFileds${k}`);
    fdiv.innerHTML = `
            <input type="number" class="windows mysize"  id="w${k}" value="${k}" disabled/ >
            <select id="s${k}" class="selectSize mysize">
                <option value="" selected disabled >Select size</option>
                <option value="70">4x3</option>
                <option value="100">4x5</option>
                <option value="150">5x4</option>
                <option value="50">small</option>
            </select>
            <input type="number"  id="we${k}" class="weight mysize" placeholder="weight" oninput="changeAmount(this.id)"/>
            <input type="number"  id="a${k}" class="amt mysize" placeholder="amount"/>
            <button class="inc" id="inc${k}" onclick="addFields()"><span class="material-symbols-outlined">
            library_add
            </span></button>
            <button id="dec${k}" onclick="removefileds(this.id)"><span class="material-symbols-outlined">
            delete
            </span></button><br>
`;

    mf.appendChild(fdiv);

    k++;

    orderFields();

}


//function to make an order
function removefileds(idvalue) {
    var df = document.getElementById(idvalue).parentElement;
    document.getElementById("mainFiled").removeChild(df);
    orderFields();
    Total();
}


function changeAmount(idval) {
    let num = idval.substring(2);
    document.getElementById(`a${num}`).value = document.getElementById(`s${num}`).value * document.getElementById(`we${num}`).value;
}



function Total() {
    let ip = document.getElementsByClassName("inputValue");
    let sum = 0;
    for (let y = 1; y <= ip.length; y++) {
        sum = sum + parseInt(document.getElementById(`a${y}`).value);
    }
    document.getElementById("total").value = sum;
}