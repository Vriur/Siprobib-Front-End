import * as constants from '../../constants';

export function request(objectInstance, objectClass, crudAction, tableState, toastState) {
    switch(crudAction){
        case constants.ADD_ACTION:
            add(objectInstance, objectClass, tableState, toastState);
            break;
        case constants.DETAIL_ACTION:
            detail(objectInstance, objectClass);
            break;
        case constants.EDIT_ACTION:
            edit(objectInstance, objectClass, tableState, toastState);
            break;
        case constants.REMOVE_ACTION:
            remove(objectInstance, objectClass, tableState, toastState);
            break;
        case constants.LOAD_ACTION:
            load(objectInstance, objectClass);
            break;
        default:
            getAll(objectClass, tableState);
            break;
    }
}

async function add(objectInstance, objectClass, tableState, toastState){
    const request = {
        method: constants.REQUEST_POST,
        crossDomain: true,
        headers: constants.REQUEST_HEADER,
        body: JSON.stringify(objectInstance.instance)
    };
    await fetch(constants.BACKEND_URL + constants.CLASSES[objectClass], request)
        .then((response) => {
            toastState.handleToast(constants.ADD_SUCCESS_MESSAGE, constants.SUCCESS);
            tableState.fetch();
        })
        .catch((error) => toastState.handleToast(constants.ADD_ERROR_MESSAGE, constants.ERROR));
}

async function detail(objectInstance, objectClass){
    const request = {
        method: constants.REQUEST_GET,
        crossDomain: true,
        headers: constants.REQUEST_HEADER,
    };
    await fetch(constants.BACKEND_URL + constants.CLASSES[objectClass] + '/' + objectInstance.instance.id, request)
        .then((response) => response.json())
        .then((data) => objectInstance.handleUpdate(data))
        .catch((error) => { console.error('Error:', error); });
}

async function edit(objectInstance, objectClass, tableState, toastState){
    const request = {
        method: constants.REQUEST_PUT,
        crossDomain: true,
        headers: constants.REQUEST_HEADER,
        body: JSON.stringify(objectInstance.instance)
    };
    await fetch(constants.BACKEND_URL + constants.CLASSES[objectClass] + '/' + objectInstance.instance.id, request)
        .then((response) => {
            toastState.handleToast(constants.EDIT_SUCCESS_MESSAGE, constants.SUCCESS);
            tableState.fetch();
        })
        .catch((error) => toastState.handleToast(constants.EDIT_ERROR_MESSAGE, constants.ERROR));
}

async function remove(objectInstance, objectClass, tableState, toastState){
    const request = {
        method: constants.REQUEST_DELETE,
        crossDomain: true,
        headers: constants.REQUEST_HEADER,
    };
    await fetch(constants.BACKEND_URL + constants.CLASSES[objectClass] + '/' + objectInstance.instance.id, request)
        .then((response) => {
            toastState.handleToast(constants.REMOVE_SUCCESS_MESSAGE, constants.SUCCESS);
            tableState.fetch();
        })
        .catch((error) => toastState.handleToast(constants.REMOVE_ERROR_MESSAGE, constants.ERROR));
}    

async function getAll(objectClass, tableState) {
    const request = {
        method: constants.REQUEST_GET,
        crossDomain: true,
        headers: constants.REQUEST_HEADER,
    };
    await fetch(constants.BACKEND_URL + constants.CLASSES[objectClass], request)
        .then((response) => response.json())
        .then((data) => tableState.handleUpdate(data))
        .catch((error) => { console.error(error); });
}

async function load(objectInstance, objectClass){
    const request = {
        method: constants.REQUEST_GET,
        crossDomain: true,
        headers: constants.REQUEST_HEADER,
    };
    await fetch(constants.BACKEND_URL + constants.CLASSES[objectClass] + '/' + constants.LOAD + objectInstance.instance.id, request)
        .then((response) => response.json())
        .then((data) => objectInstance.handleLoad(data))
        .catch((error) => { console.error('Error:', error); });
}

export async function loadAutocompleteOptions(objectClass, handleUpdate) {
    const request = {
        method: constants.REQUEST_GET,
        crossDomain: true,
        headers: constants.REQUEST_HEADER,
    };
    await fetch(constants.BACKEND_URL + constants.CLASSES[objectClass], request)
        .then((response) => response.json())
        .then(async (data) => {
            handleUpdate(autocompleteOptions(objectClass, data));
        })
        .catch((error) => { console.error(error); });
}

export function autocompleteOptions(objectClass, data) {
    switch(objectClass){
        case constants.LOCATION_CLASS:
            data.forEach(location => {
                location.label = location.detail;
                delete location.detail;
            });
            break;
        case constants.AUTHOR_CLASS:
            data.forEach(author => {
                author.label = author.name;
                delete author.name;
                delete author.type;
            });
            break;
        default:
            data.forEach(element => {
                element.label = element.description;
                delete element.description;
            });
            break;
    }
    return data;
}