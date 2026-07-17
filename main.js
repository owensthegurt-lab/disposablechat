/*
====================================
DISPOSABLE CHAT - MAIN
====================================
*/


console.log("MAIN JS LOADED");



const menu = document.getElementById("menu");

const createBtn = document.getElementById("createBtn");

const joinBtn = document.getElementById("joinBtn");



/*
====================================
GENERATE PARTY CODE
====================================
*/

function generateCode() {


    const characters =
        "ABCDEFGHJKLMNPQRSTUVWXYZ123456789";


    let code = "";


    for (let i = 0; i < 5; i++) {


        code += characters[

            Math.floor(

                Math.random() *
                characters.length

            )

        ];


    }


    return code;


}




/*
====================================
CREATE PARTY
====================================
*/


createBtn.addEventListener("click", () => {


    console.log("Creating party");


    const partyCode =
        generateCode();



    menu.innerHTML = `


        <h1>
            Party Created
        </h1>


        <p>
            Share this code with friends:
        </p>


        <h2>
            ${partyCode}
        </h2>


        <button id="startBtn">
            Start Chat
        </button>


    `;



    const startBtn =
        document.getElementById("startBtn");



    startBtn.addEventListener("click", () => {


        console.log(
            "Starting party:",
            partyCode
        );


        menu.innerHTML = `


            <h1>
                Party Lobby
            </h1>


            <p>
                Code:
                ${partyCode}
            </p>


            <p>
                Waiting for players...
            </p>


        `;


    });



});




/*
====================================
JOIN PARTY
====================================
*/


joinBtn.addEventListener("click", () => {



    menu.innerHTML = `


        <h1>
            Join Party
        </h1>


        <p>
            Enter party code
        </p>


        <input
            id="codeInput"
            maxlength="5"
            placeholder="XXXXX"
        >


        <br>


        <button id="joinConfirm">
            Join
        </button>


    `;



    const joinConfirm =
        document.getElementById("joinConfirm");



    joinConfirm.addEventListener("click", () => {



        const code =
            document
            .getElementById("codeInput")
            .value
            .toUpperCase();



        console.log(
            "Joining party:",
            code
        );



        menu.innerHTML = `


            <h1>
                Joining Party
            </h1>


            <p>
                Code:
                ${code}
            </p>


            <p>
                Connecting...
            </p>


        `;



    });



});
