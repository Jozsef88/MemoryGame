import React, {useState} from 'react'
import './MemoryGame.css'

const guineaPigs = [
    "https://www.parksidevets.com/pets/wp-content/uploads/sites/2/2019/05/parkside-vets-guinea-pigs-care.jpg",
    "https://images.squarespace-cdn.com/content/v1/57d2d2eb5016e1b624ddfa52/1534445165128-477VSETV30PUZUUYXB36/ke17ZwdGBToddI8pDm48kIu1QHqWqYcqSXGQukjVMYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fIG4lvOJgCZoc7R0Cd0Owykpqjz4OyDzVxk_JLua2qGvQ/HayPigs_Harlequin_Guinea_Pig_005.jpg",
    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/igZ6GO3jddQw/v2/1000x-1.jpg",
    "https://www.totallyveganbuzz.com/wp-content/uploads/2019/12/It%E2%80%99s-now-illegal-to-own-just-one-guinea-pig-in-Switzerland-because-they-feel-lonely-and-isolated-_TotallyVeganBuzz-1280x720.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-guinea-pig-names-for-girls-1559248410.jpg?crop=0.423xw:0.953xh;0.461xw,0&resize=480:*",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPsbUOor-Gd7j42o3pPE-KNoh2gV9c4insZfd_6caMsD9s6Ocl&usqp=CAU",
    "https://cdn.mos.cms.futurecdn.net/gJJFamQca86CibEeDmegk-320-80.jpg",
    "https://thenypost.files.wordpress.com/2020/05/guinea-pig.jpg?quality=80&strip=all",
    "https://pbs.twimg.com/profile_images/1039214289658281986/32gkvRA0_400x400.jpg"
];

let array = [];

for (let index = 0; index < 18; index++) {
    if (index >= 9) {
        array.push(guineaPigs[index-9]) 
    } else {
        array.push(guineaPigs[index]) 
    } 
}

const incArray = [];

for (let index = 0; index < 18; index++) {
    const randNum = Math.floor(Math.random() * (18-index));
    const decArray = array.splice(randNum, 1);
    incArray.push(decArray);
}

export default function MemoryGame() {

    const [flippedUp, setFlippedUp] = useState([]);
    const [matchFlippedUp, setMatchFlippedUp] = useState([]);

    const [flip1, setFlip1] = useState(false);
    const [flip2, setFlip2] = useState(false);
    const [flip3, setFlip3] = useState(false);
    const [flip4, setFlip4] = useState(false);
    const [flip5, setFlip5] = useState(false);
    const [flip6, setFlip6] = useState(false);
    const [flip7, setFlip7] = useState(false);
    const [flip8, setFlip8] = useState(false);
    const [flip9, setFlip9] = useState(false);
    const [flip10, setFlip10] = useState(false);
    const [flip11, setFlip11] = useState(false);
    const [flip12, setFlip12] = useState(false);
    const [flip13, setFlip13] = useState(false);
    const [flip14, setFlip14] = useState(false);
    const [flip15, setFlip15] = useState(false);
    const [flip16, setFlip16] = useState(false);
    const [flip17, setFlip17] = useState(false);
    const [flip18, setFlip18] = useState(false);

    const onClick1 = () => {
        setFlip1(true);
        setFlippedUp([...flippedUp, incArray[0]])
    }
    const onClick2 = () => {
        setFlip2(true);
        setFlippedUp([...flippedUp, incArray[1]])
    }
    const onClick3 = () => {
        setFlip3(true);
        setFlippedUp([...flippedUp, incArray[2]])
    }
    const onClick4 = () => {
        setFlip4(true);
        setFlippedUp([...flippedUp, incArray[3]])
    }
    const onClick5 = () => {
        setFlip5(true);
        setFlippedUp([...flippedUp, incArray[4]])
    }
    const onClick6 = () => {
        setFlip6(true);
        setFlippedUp([...flippedUp, incArray[5]])
    }
    const onClick7 = () => {
        setFlip7(true);
        setFlippedUp([...flippedUp, incArray[6]])
    }
    const onClick8 = () => {
        setFlip8(true);
        setFlippedUp([...flippedUp, incArray[7]])
    }
    const onClick9 = () => {
        setFlip9(true);
        setFlippedUp([...flippedUp, incArray[8]])
    }
    const onClick10 = () => {
        setFlip10(true);
        setFlippedUp([...flippedUp, incArray[9]])
    }
    const onClick11 = () => {
        setFlip11(true);
        setFlippedUp([...flippedUp, incArray[10]])
    }
    const onClick12 = () => {
        setFlip12(true);
        setFlippedUp([...flippedUp, incArray[11]])
    }
    const onClick13 = () => {
        setFlip13(true);
        setFlippedUp([...flippedUp, incArray[12]])
    }
    const onClick14 = () => {
        setFlip14(true);
        setFlippedUp([...flippedUp, incArray[13]])
    }
    const onClick15 = () => {
        setFlip15(true);
        setFlippedUp([...flippedUp, incArray[14]])
    }
    const onClick16 = () => {
        setFlip16(true);
        setFlippedUp([...flippedUp, incArray[15]])
    }
    const onClick17 = () => {
        setFlip17(true);
        setFlippedUp([...flippedUp, incArray[16]])
    }
    const onClick18 = () => {
        setFlip18(true);
        setFlippedUp([...flippedUp, incArray[17]])
    }
    
        if (flippedUp.length === 2) {
            if (flippedUp[0][0] === flippedUp[1][0]) {
                console.log("Match!");
                setMatchFlippedUp([...matchFlippedUp, flippedUp[0][0]]);
                setFlippedUp([]);
            } else {
                console.log("Mismatch!"); 
                setFlippedUp([]);
            }
        }
        console.log(flippedUp.length);
        console.log(matchFlippedUp);


    const cardTurn1 = () => {return flip1 === true ? {transform: "rotateY(180deg)"} : {}}
    const cardTurn2 = () => {return flip2 === true ? {transform: "rotateY(180deg)"} : {}}
    const cardTurn3 = () => {return flip3 === true ? {transform: "rotateY(180deg)"} : {}}
    const cardTurn4 = () => {return flip4 === true ? {transform: "rotateY(180deg)"} : {}}
    const cardTurn5 = () => {return flip5 === true ? {transform: "rotateY(180deg)"} : {}}
    const cardTurn6 = () => {return flip6 === true ? {transform: "rotateY(180deg)"} : {}}
    const cardTurn7 = () => {return flip7 === true ? {transform: "rotateY(180deg)"} : {}}
    const cardTurn8 = () => {return flip8 === true ? {transform: "rotateY(180deg)"} : {}}
    const cardTurn9 = () => {return flip9 === true ? {transform: "rotateY(180deg)"} : {}}
    const cardTurn10 = () => {return flip10 === true ? {transform: "rotateY(180deg)"} : {}}
    const cardTurn11 = () => {return flip11 === true ? {transform: "rotateY(180deg)"} : {}}
    const cardTurn12 = () => {return flip12 === true ? {transform: "rotateY(180deg)"} : {}}
    const cardTurn13 = () => {return flip13 === true ? {transform: "rotateY(180deg)"} : {}}
    const cardTurn14 = () => {return flip14 === true ? {transform: "rotateY(180deg)"} : {}}
    const cardTurn15 = () => {return flip15 === true ? {transform: "rotateY(180deg)"} : {}}
    const cardTurn16 = () => {return flip16 === true ? {transform: "rotateY(180deg)"} : {}}
    const cardTurn17 = () => {return flip17 === true ? {transform: "rotateY(180deg)"} : {}}
    const cardTurn18 = () => {return flip18 === true ? {transform: "rotateY(180deg)"} : {}}

    const backGround = (img) => {
        return {backgroundImage: `url(${img})`};
    }

    //console.log(backGround(guineaPigs[0]));

    const createCards = (index, clicking, flipping) => {
        return(
            <div className="card" onClick={clicking}>
                <div 
                    className="card-back"
                    style={flipping}>
                </div>
                <div
                    style={{...index, ...flipping}}
                    className="card-front">
                </div>
            </div>
        );
    }
    
    return (
        <div className="card-wrapper">
            {createCards(backGround(incArray[0]), onClick1, cardTurn1())}
            {createCards(backGround(incArray[1]), onClick2, cardTurn2())}
            {createCards(backGround(incArray[2]), onClick3, cardTurn3())}
            {createCards(backGround(incArray[3]), onClick4, cardTurn4())}
            {createCards(backGround(incArray[4]), onClick5, cardTurn5())}
            {createCards(backGround(incArray[5]), onClick6, cardTurn6())}
            {createCards(backGround(incArray[6]), onClick7, cardTurn7())}
            {createCards(backGround(incArray[7]), onClick8, cardTurn8())}
            {createCards(backGround(incArray[8]), onClick9, cardTurn9())}
            {createCards(backGround(incArray[9]), onClick10, cardTurn10())}
            {createCards(backGround(incArray[10]), onClick11, cardTurn11())}
            {createCards(backGround(incArray[11]), onClick12, cardTurn12())}
            {createCards(backGround(incArray[12]), onClick13, cardTurn13())}
            {createCards(backGround(incArray[13]), onClick14, cardTurn14())}
            {createCards(backGround(incArray[14]), onClick15, cardTurn15())}
            {createCards(backGround(incArray[15]), onClick16, cardTurn16())}
            {createCards(backGround(incArray[16]), onClick17, cardTurn17())}
            {createCards(backGround(incArray[17]), onClick18, cardTurn18())}
        </div>
    )
}
