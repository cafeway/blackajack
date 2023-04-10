
const reviewData = window.data;

async function submitForm (email,username) {
    let data = {"username":username,"email":email}
    const response =  await('https://httpbin.org/post',{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    }).then((res)=>{
        console.log(res)
    })
}


document.addEventListener('DOMContentLoaded', function(){
    const section = document.querySelector('.row')

    window.data.forEach((item)=>{
       
        const column = document.createElement('div')
        column.classList.add("col-lg-6")


        const card = document.createElement('div')
        card.classList.add("verified_customer_section")
        card.style.margin = "10px"

        const status =  document.createElement('div')
        status.classList.add("customer_name_review_status")
        status.textContent = item.review
        status.style.fontSize = "14px"
        status.classList.add("text-bold")
        card.appendChild(status)

        const name = document.createElement('div')
        name.classList.add("customer_name")
        name.textContent = "by"+ " "+ item.name
        name.classList.add("text-info")
        card.append(name)

        const small_font = document.createElement('small')
        const review = document.createElement('div')
        review.classList.add("customer_review")
        review.textContent = "posted at" + " " + item.date
        review.classList.add("text-success")
        small_font.append(review)
        card.append(small_font)

        const r_status = document.createElement('div')
        name.classList.add("customer_status")
        card.append(r_status)

        const badge = document.createElement('div')
        name.classList.add("customer_badge")
        r_status.append(badge)

    

        const content = document.createElement('div')
        content.classList.add("customer_status_content")
        content.textContent =item.rating
        card.append(content)

        const comment = document.createElement('div')
        comment.classList.add("customer_comment")
       
        card.append(comment)
        column.append(card)
       
        section.appendChild(column)
    })
})

function submitReview () {
    let username = document.getElementById('name')
    let review = document.getElementById('review')
    console.log(review.value)
}

