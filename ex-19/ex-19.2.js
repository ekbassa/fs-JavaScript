const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
    ];

    //1. 
    const ol = document.createElement('ol');

    users.forEach((user)=>{
        const li = document.createElement('li');
        li.innerText = user.firstName + " " + user.lastName;

    //2.
        li.classList.add('data-id', Math.floor(Math.random() * 100000));
        ol.append(li)
        li.setAttribute('type','none')   // remove the numbering 
    })
    console.log(ol)

        const body =document.getElementsByTagName('body')[0];
        body.append(ol);

        