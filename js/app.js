'use strict'

let d = document

let removeSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>'

let completeSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg>'

let startSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/></svg>'

let importantSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/></svg>'

let tagSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"/><path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"/></svg>'

let addSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>'

let optionsSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/></svg>'

let currentDay = new Date()

let inputChore = $('#chore')
let inputDate = $('#date')
let inputUser = $('#name')
let inputTag = $('#form-tag')
let inputImportant = $('#importance')

let chores = []
let dateChores = []
let users = []

let tagColors = ['#7637f6', '#c165dd', '#47e5bc', '#32cbff', '#ff715b', '#ffd166', '#ff90b3', '#00cc66', '#648de5']

class Chore {

    name
    date
    user
    important
    tag
    state
    id
    active

    constructor(param_name, param_date, param__user, param_importance = false, param_tag = 'white', param_state = 'Pending'){
        this.name = this.cleanText(param_name)
        this.date = param_date
        this.user = this.cleanText(param__user)
        this.important = param_importance
        this.tag = param_tag
        this.state = param_state
        this.id = chores.length
        this.active = true
    }

    cleanText( string ){
        return capitalize(string.replace(/\s{2,}/g, " "))
    }

    checkTime(){
        let choreDate = new Date(this.date[0], this.date[1]-1, this.date[2])
        let oneDay = 24 * 60 * 60 * 1000
        choreDate = Math.ceil((choreDate - currentDay) / oneDay)

        return choreDate
    }

    paintNode(){

        let nodeChore

        if(this.active){

            switch(this.state){
                case 'Pending':
                    nodeChore = $('#pending .table__column')
                    switch(this.important){
                        case false:
                            nodeChore.append(this.createNode())
                        break
                        default:
                            nodeChore.prepend(this.createNode())
                        break
                    }
                break
                case 'Start':
                    nodeChore = $('#inprogress .table__column')
                    switch(this.important){
                        case false:
                            nodeChore.append(this.createNode())
                        break
                        default:
                            nodeChore.prepend(this.createNode())
                        break
                    }
                break
                case 'Completed':
                    nodeChore = $('#completed .table__column')
                    nodeChore.append(this.createNode())
                break
            }

        }
    }

    createNode(){

        let myDate = this.date.slice().reverse().join('/')
        let remaining =`${myDate}`

        if(this.state !== 'Completed'){
            remaining = this.timeString( remaining )
        }

        let nodeTag = $(`<button class="table__button tags">${tagSVG}</button>`)

        nodeTag.on({
            click: function(){
                createColorModal( this )
                $('.color-modal').addClass('active')
            }
        })

        let nodeChore = $(`<li class="table__list" style="--c-tag:${this.tag}" data-chore="${chores.indexOf(this)}"></li>`)

        let nodeH3 = $(`<h3 class="table__chore"><span class="table__chore-time">${remaining}</span><span class="table__chore-user">${this.user}</span></h3>`)

        let nodeTitle = $(`<span class="table__chore-span">${this.name}</span>`)

        nodeTitle.append(nodeTag)
        nodeH3.prepend(nodeTitle)
        nodeChore.append(nodeH3)

        let svg = completeSVG
        if(this.state === 'Pending') { svg = startSVG }

        let nodeComplete  = $(`<button class="table__button complete">${svg}</button>`)

        nodeComplete.on({
            click: function(){
                let nodeChore = $(this.parentElement)
                let thisIndex = nodeChore.data('chore')

                switch (chores[thisIndex].state){
                    case 'Pending':
                        chores[thisIndex].state = 'Start'
                    break
                    case 'Start':
                        chores[thisIndex].state = 'Completed'
                    break
                    case 'Completed':
                        chores[thisIndex].state = 'Pending' 
                    break
                }

                paintChore()

            }
        })

        let nodeRemove = $(`<button class="table__button remove">${removeSVG}</button>`)

        nodeRemove.on({
            click: function(){

                let thisIndex = nodeChore.data('chore')
                chores.splice(thisIndex, 1)

                paintChore()
            }
        })

        let nodeImportant = $(`<button class="table__button important">${importantSVG}</button>`)

        nodeImportant.on({
            click: function(){

                let nodeChore = $(this.parentElement)
                let thisIndex = nodeChore.data('chore')

                chores[thisIndex].important ? chores[thisIndex].important = false : chores[thisIndex].important = true

                paintChore()

            }
        })

        let nodeOptions = $(`<button class="table__button options">${optionsSVG}</button>`)

        nodeOptions.on({
            click: function(){
                let elementData = this.closest('.table__list').dataset.chore

                inputChore.val(chores[elementData].name)
                inputDate.val(chores[elementData].date.join('-'))
                inputUser.val(chores[elementData].user)
                
                if(chores[elementData].tag !== 'white') inputTag.addClass('colored')

                inputTag.css({
                    '--c-formtag': chores[elementData].tag
                }).val(chores[elementData].tag)

                if(chores[elementData].important && !inputImportant.is(':checked')){
                    inputImportant.click();
                } 
                
                $('.modal__title').html('Modificar tarea')
                $('#modal').attr('data-index', elementData)

                createButton('cambiar')

                $('#modal').addClass('active')
            }
        })

        nodeChore.append(nodeRemove)
        nodeChore.append(nodeOptions)

        if(this.state !== 'Completed'){

            nodeChore.append(nodeImportant)

            if(this.important) { nodeChore.addClass('importantChore') }

        }

        nodeChore.prepend(nodeComplete)

        return nodeChore
    }

    timeString( string ){

        if(this.checkTime() === 0){
            string += ` - Hoy`

        } else if(this.checkTime() === 1){
            string += ` - Queda ${this.checkTime()} día`

        } else if(this.checkTime() < 0){
            string += ` - Terminó hace ${-this.checkTime()} días`

        } else if (this.checkTime() > 0 && this.checkTime() !== 1){
            string += ` - Quedan ${this.checkTime()} días`

        } else{
            string = ''

        }

        return string
    }

}

if(JSON.parse(localStorage.getItem('chores'))){
    let JSONInfo = JSON.parse(localStorage.getItem('chores'))

    for (let element of JSONInfo){
        chores.push( new Chore (element.name, element.date, element.user, element.important, element.tag, element.state)) 

        filterUser( element.user )
    }

}

function filterUser( user ){

    if(!users.includes(user) && user){

        let nodeUser = $(`<option value="${user}">${user}</option>`)
        $('#filter-user').append(nodeUser)

        users.push(user)

    }

}

function capitalize ( string ){
    return string.substr(0,1).toUpperCase()+string.substr(1)
}

function createButton( type ){

    let nodeButton = $(`<button id="${type}" class="modal__button">${type}</button>`)

    nodeButton.on({
        click:function(){
            getValues( type )
        }
    })

    $('.modal__form').append(nodeButton)

}

function getValues( type ){
    let nameValue = inputChore.val()
    let dateValue = inputDate.val().split('-')
    let userValue = inputUser.val()
    let tagValue = inputTag.val()
    let importanceValue = inputImportant.is(':checked')

    if(nameValue && /^[a-zA-Z0-9]/.test( nameValue )){

        type === 'crear' ? 
            writeValues({
                name: nameValue, 
                date: dateValue, 
                user: userValue, 
                tag: tagValue, 
                important: importanceValue
            }) 
            : 
            changeValues({
                name: nameValue, 
                date: dateValue, 
                user: userValue, 
                tag: tagValue, 
                important: importanceValue,
                index: $('#modal').attr('data-index')
            })

            $('.modal__button').remove()

    }
}

function writeValues( param_values ){

    chores.push( new Chore (param_values.name, param_values.date, param_values.user, param_values.important, param_values.tag) )

    filterUser( param_values.user )

    $('#modal').removeClass('active')

    paintChore()

}

function changeValues ( param_values ){

    let choreKeys = Object.keys(chores[param_values.index])
    let chore = chores[param_values.index]

    for( let key of choreKeys){
        if(key !== 'state' && key !== 'id' && key !== 'active'){
            chore[key] = param_values[key]
        }
    }

    filterUser( param_values.user )

    $('#modal').removeClass('active')

    paintChore()

}

function paintChore (){
    $('.table__column').empty()
    
    for( let cadaTarea of chores){
        cadaTarea.paintNode()
    }

    $('#pending .table__column').append($(`<li id="add" class=" table__list">${addSVG}</li>`))

    $('#add').on({
        click: function(){
            inputChore.val('')
            inputDate.val('')
            inputUser.val('')
            inputTag.val('white')
            inputTag.removeClass('colored')
            if(inputImportant.is(':checked')) inputImportant.click();

            $('#modal').removeAttr('data-index')
            createButton('crear')

            $('.modal__title').html('Añadir nueva tarea')

            $('#modal').addClass('active')
        }
    })

    localStorage.setItem('chores', JSON.stringify(chores))
}

function createColorModal( element ){

    let nodeModal = $('<div class ="color-modal"></div>')
    let nodeContainer = $('<div class="color-modal__container"></div>')

    for( let i = 0; i < tagColors.length; i++){

        let nodeColor = $(`<label for="${'tag-color'+i}" class="color-modal__label">
            <input type="radio" name="tag-color" value="${tagColors[i]}" id="${'tag-color'+i}" class="color-modal__color">
            <span></span>
        </label>`)

        nodeColor.css({
            '--c-bkg': tagColors[i]
        })

        nodeColor.on({
            click: function(e){
                e.stopPropagation()
                if(element.id === 'form-tag' || element.id === 'filter-tag'){

                    element.value = this.children[0].value
                    $(element).css({
                        '--c-formtag': this.children[0].value
                    })
                    $(element).addClass('colored')
                    filterChores()

                } else{

                    chores[$(element).closest('.table__list').data('chore')].tag = this.children[0].value
                    paintChore()
                    
                }

                $(nodeModal).remove()
            }
        })

        nodeContainer.append(nodeColor)
    }

    nodeModal.on({
        click:function(){
            $(this).remove()
        }
    })

    nodeModal.append(nodeContainer)

    let nodeButtonClear = $('<button class="color-modal__button">Clear</button>')

    nodeButtonClear.on({
        click: function(){

            element.value = 'white'
            $(element).removeAttr("style")
            $(element).css({
                '--c-formtag': 'white'
            })
            $(element).removeClass('colored')
            filterChores()
            
        }
    })

    nodeContainer.append(nodeButtonClear)
    nodeModal.appendTo('#main')

}

function filterChores(){

    let nameRegExp = new RegExp ( '(^'+ $('#chore-name').val() + ')' , 'i')
    let userRegExp = new RegExp ( '(^'+ $('#filter-user').val() + ')' , 'i')
    let valueTag = $('#filter-tag').val()
    let valueImportant = $('#filter-importance').is(':checked')

    for(let element of chores){
        if(nameRegExp.test(element.name) && userRegExp.test(element.user)){
            if(valueImportant === false || valueImportant === element.important){
                if(valueTag === 'white' || valueTag === element.tag){
                    element.active = true
                }else {
                    element.active = false
                }
            }else {
                element.active = false
            }
        } else {
            element.active = false
        }
    }

    paintChore()

}

paintChore()

$(document).on({
    keyup: event => {
        if(event.key === 'Enter' && $('#modal').hasClass('active')){

            if($('#modal').attr('data-index')){

                getValues( 'cambiar' )

            } else {

                getValues( 'crear' )

            }

        }
    }
})

inputTag.on({
    click: function(){
        createColorModal(this)
    }
})

$('#filter-tag').on({
    click: function(){
        createColorModal(this)
    }
})

$('#chore-name').on({
    keyup : function(){
        filterChores()
    }
})

$('#filter-user').on({
    change: function(){
        filterChores()
    }
})

$('#filter-importance').on({
    change: function(){
        filterChores()
    }
})


$('#close').on({
    click: function(){
        $('#modal').removeClass('active')
        $('.modal__button').remove()
    }
})

