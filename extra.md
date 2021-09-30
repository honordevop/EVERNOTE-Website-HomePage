@media only screen and (min-width: 1100px) {
    header {
        padding: 0 0 0 40px;
    }
    .nav-bar {
        padding: 0 40px 0 0;
        /* margin: 0 98.8px; */
    }
    .nav-elements {
        /* padding-left: 30%; */
        width: 1220px;
        margin: auto;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        /* width: 70%; */
        padding: 0 20px 0 30%;
        /* padding-left: 20%; */
        height: 80px;
        border: yellow 4px solid;
        background-color: blue;
        /* position: absolute; */
        /* overflow: visible; */
        /* z-index: 0; */
    }
    .nav-list {
        position: absolute;
        display: flex;
        padding: 0;
        border-bottom: none;
        padding-inline-start: 0 !important;
        padding: 30px 0 0 0;
        width: max-content;
        align-items: center;
        border: 2px solid yellow;
        overflow: hidden;
        column-gap: 5px;
        align-items: center;
        width: 25rem;
        
    }
    .sub-menu {
        display: none;
    }
    .nav-items {
        background-color: transparent;
    }
    .nav-list {
        padding: 0;
        background-color: transparent;
        /* width: max-content; */
    }
    .nav-link {
        width: max-content;
        border: violet 2px solid;
        
    }
    .nav-bar {
        display: flex;
        flex-direction: row;
        align-content: center;
        border: red solid 2px;
        /* overflow: visible; */
    }
    .nav-items {
        display: block;
        /* position: relative; */
        /* top: 0; */
    }
    #nav-Toggle {
        display: none;
    }
    .appstore-img {
        display: none;
    }
    .subMenu__content {
        background-color: whitesmoke;
        /* width: 6rem; */
    }
    .nav-list button {
        background-color: transparent;
        padding: 12px;
        border-radius: 4px;
        cursor: pointer;
        border: hsl(136, 100%, 33%) 2px solid;
    }
    .push-right, .push-left {
        /* align-items: flex-end; */
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        column-gap: 2rem;
        /* margin-left: 15.5%; */
    }

    .sub-menu {
        position: absolute;
        left: 0;
        right: 0;
        top: 5rem;
        display: block;
        /* flex-direction: row; */        
        background-color: rgb(255, 255, 255);
        padding:  4rem 0;
        width: 100%;
        overflow: visible;
        z-index: 50;
        
    }

    .subMenu__list {
        /* position: relative; */
        /* height: max-content; */
        /* overflow: visible; */
        /* z-index: 50; */
        /* border: 2px solid red; */
    }
    .sub-menu-list {
        border: red 2px solid;
        /* display: inline-block; */
        /* display: flex; */
        /* width: 4rem; */
    }
    .sub-menu-item {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 2%;
        background-color: yellow;
        width: 900px;
        margin: 0 auto;
        align-items: center;
        align-content: center;
        top: 5;
    }
}