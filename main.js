const menu =
document.getElementById("menu");


const createBtn =
document.getElementById("createBtn");


const joinBtn =
document.getElementById("joinBtn");



function generateCode(){

    const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZ123456789";


    let code = "";


    for(let i = 0; i < 5; i++){

        code += chars[
            Math.floor(
                Math.random() * chars.length
            )
        ];

    }


    return code;

}




createBtn.onclick = () => {


    const code =
    generateCode();



    menu.innerHTML = `


        <h1>
            Party Created
        </h1>


        <p>
            Share this code with your friends
        </p>


        <h2>
            ${code}
        </h2>


        <button id="startBtn">
            Start Chat
        </button>


    `;



    document
    .getElementById("startBtn")
    .onclick = () => {


        console.log(
            "Starting chat:",
            code
        );


    };


};




joinBtn.onclick = () => {


    menu.innerHTML = `


        <h1>
            Join Party
        </h1>


        <p>
            Enter party code
        </p>


        <input 
        id="codeInput"
        placeholder="XXXXX"
        maxlength="5"
        >


        <br>


        <button id="joinConfirm">
            Join
        </button>


    `;



    document
    .getElementById("joinConfirm")
    .onclick = () => {


        const code =
        document
        .getElementById("codeInput")
        .value
        .toUpperCase();



        console.log(
            "Joining:",
            code
        );


    };


};
