import {renderEntireTree} from "../render";

let state ={

    contentPage: {
        posts: [
            {
                id: 1,
                photo: 'https://i.pinimg.com/originals/dc/47/43/dc4743ec084be6c45b2c023a39a37925.jpg',
                message: 'I will catch you!'
            },
            {
                id: 2,
                photo: 'https://www.maxim.com/.image/t_share/MTY3ODU5OTMxNjgzMjM1MDg5/margot-robbie-harley-1.jpg',
                message: 'Pudding, you are best.'
            }
        ],
        newPostText: '',
    },

    dialogsPage: {
        dialogs: [
            {
                id: 'capitangordon',
                name: 'Capitan Gordon',
                icon: 'https://vignette.wikia.nocookie.net/p__/images/6/66/5446248-james.jpg/revision/latest?cb=20170403025822&path-prefix=protagonist'
            },
            {
                id: 'harley',
                name: 'Harley',
                icon: 'https://i.pinimg.com/originals/b5/eb/0c/b5eb0cb4928fcae738b6c0619f833d7f.jpg'
            },
            {
                id: 'frost',
                name: 'Frost',
                icon: 'https://www.spoilersguide.com/media/elfinder/1391340_602287349894779_1105143924_n.jpg'
            },
        ],

        messages: [
            {id: 'capitangordon', massage: 'i will catch you!'},
            {id: 'harley', massage: 'Pudding, i am bored, lets rob the bank!!!!'},
            {id: 'frost', massage: 'Hi, i need some extra lessons'},
        ]
    }
}

export let newPost = () => {
    let post = {
        id: 3,
        photo: 'https://www.maxim.com/.image/t_share/MTY3ODU5OTMxNjgzMjM1MDg5/margot-robbie-harley-1.jpg',
        message: state.contentPage.newPostText,
    }
    state.contentPage.posts.push(post);
    state.contentPage.newPostText = '';
    renderEntireTree(state);
}

export let updatePostText = (newText) => {
    state.contentPage.newPostText = newText;
    renderEntireTree(state);
}



export default state;