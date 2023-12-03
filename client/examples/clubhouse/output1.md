# Developer's Documentation

This documentation provides an overview of the code and its functionality. It includes a brief introduction, table of contents, function explanations, dependencies, and API specifications (if present). The code is written in Python using the Django framework.

## Table of Contents
1. Introduction
2. Code Overview
3. Function Explanations
4. Dependencies
5. API Specifications (if applicable)
6. Schema Tables

## Introduction
The code provided includes models for a Club, Item, and Request. These models are defined using the Django ORM (Object-Relational Mapping). The models represent different entities in a club management system, such as clubs, items, and requests. The code also includes functions for checking user access and authorization.

## Code Overview
The code consists of three model classes: Club, Item, and Request. Each class represents a table in the database and defines the fields and relationships between the tables. Additionally, there are functions for checking user access and authorization.

## Function Explanations
### can_user_access(user_id, action, club_id=None)
This function checks if a user can access a specific view method. It takes the user ID, action, and optional club ID as parameters. It retrieves the user's permissions based on the club and user ID. If the user has the necessary permissions, it returns True; otherwise, it returns False.

## Dependencies
The code has the following dependencies:
- Django: a Python web framework
- Django's built-in models and shortcuts
- Base models: models related to the club management system
- Account models: models related to user accounts
- Math: for mathematical calculations

## API Specifications
There are no API specifications provided in the code.

## Schema Tables

### Club
| Field Name    | Type        | Description               |
| ------------- | ----------- | ------------------------- |
| users         | ManyToMany | Users associated with the club |
| club_name     | CharField  | Name of the club           |
| description   | TextField  | Description of the club    |
| logo          | ImageField  | Logo of the club           |

### Item
| Field Name    | Type        | Description               |
| ------------- | ----------- | ------------------------- |
| item_name     | CharField  | Name of the item           |
| qty           | IntegerField| Quantity of the item       |
| club          | ForeignKey | Club associated with the item |
| image         | ImageField
# Developer's Documentation

## Introduction
This documentation provides an overview of the code and its functions. It includes a brief introduction, table of contents, function explanations, dependencies, API specs (if present), and schema tables in markdown format.

## Table of Contents
1. [is_ajax(request)](#is_ajax)
2. [index(request)](#index)
3. [user_add(request, club_id)](#user_add)

## Function Explanations
### is_ajax(request) <a name="is_ajax"></a>
This function checks if a request is an AJAX request.

### index(request) <a name="index"></a>
This function is the handler for the index page. It retrieves a list of clubs for the user and renders the index.html template.

### user_add(request, club_id) <a name="user_add"></a>
This function handles the user add functionality. It checks if the user has permission to add a user to a club, retrieves the necessary data, and renders the user_add.html template.

## Dependencies
The code has the following dependencies:
- PermissionAssignment
- Permission
- User
- Club
- CreateUserForm
- InfoForm
- PermissionAssignmentForm

## API Specs
No API specifications are present in the code.

## Schema Tables
No schema tables are present in the code.
# Developer Documentation

## Introduction
This documentation provides an overview and explanation of the code provided. It includes function explanations, dependencies, and API specifications (if present).

## Table of Contents
- [Function: user_add](#function-user_add)
- [Function: existing_user_add](#function-existing_user_add)
- [Function: user_delete](#function-user_delete)
- [Function: club_add](#function-club_add)

## Function: user_add
This function is responsible for creating a new user account and adding them to a club.

### Parameters
- `request`: The HTTP request object.
- `club_id`: The ID of the club the user will be added to.

### Dependencies
- `info_form`: A module containing the Info class.
- `User`: A class representing a user.
- `Club`: A class representing a club.
- `Role`: A class representing a role.
- `Permission_Assignment`: A class representing a permission assignment.
- `messages`: A module for displaying messages to the user.

### API Specs
None

### Schema Tables

| Variable | Type | Description |
| --- | --- | --- |
| roll_no | string | The roll number of the user. |
| user | object | The user object. |
| user_info | object | The info object linked to the user. |
| club | object | The club object. |
| role_id | string | The ID of the role. |
| role | object | The role object. |
| permission_assignment | object | The permission assignment object. |

## Function: existing_user_add
This function is responsible for adding an existing user to a club.

### Parameters
- `request`: The HTTP request object.
- `club_id`: The ID of the club the user will be added to.

### Dependencies
- `can_user_access`: A function for checking user access.
- `Club`: A class representing a club.
- `PermissionAssignmentForm`: A form for permission assignment.
- `User`: A class representing a user.
- `messages`: A module for displaying messages to the user.

### API Specs
None

### Schema Tables

| Variable | Type | Description |
| --- | --- | --- |
| user_id | string | The ID of the user to be added. |
| user | object | The user object. |
| club | object | The club object. |
| name | string | The name of the user
# Developer Documentation

This documentation provides an overview of the code and its functions, along with explanations of each function and its usage. It also includes information about any dependencies and API specifications.

## Table of Contents
- [Introduction](#introduction)
- [Function Explanations](#function-explanations)
- [Dependencies](#dependencies)
- [API Specs](#api-specs)
- [Schema Tables](#schema-tables)

## Introduction
The code provided consists of several functions related to managing clubs and items within a club. These functions handle tasks such as adding a club, viewing club details, adding items to a club, and viewing all items and requests related to a club.

## Function Explanations
1. `club_add(request)`
   - This function handles the addition of a new club.
   - It takes a `POST` request as input and adds the club to the database.
   - If the club is added successfully, it redirects the user to the home page.
   - If there is an error, it renders the club add page with the form.

2. `club_view(request, club_id)`
   - This function handles the viewing of club details.
   - It checks if the user has access to view the club using the `can_user_access` function.
   - If the user has access, it retrieves the club and its members from the database.
   - It renders the club view page with the club and members as context.
   - If the user does not have access, it redirects to an error page.

3. `item_add(request, club_id)`
   - This function handles the addition of a new item to a club.
   - It checks if the user has access to add an item using the `can_user_access` function.
   - If the user has access, it retrieves the club and initializes the form with the club.
   - It validates the form and saves the item if the form is valid.
   - If the item is added successfully, it redirects to the items view page for the club.
   - It renders the item add page with the club and form as context.
   - If the user does not have access, it redirects to an error page.

4. `view_all_requests(club)`
   - This function retrieves all requests related to a club.
   - It returns a queryset of all the requests, ordered by date created.

5. `items_view(request, club_id)`
# Developer Documentation

## Introduction
This documentation provides an overview of the code and its functions for updating items, deleting items, and approving requests. It also includes information on the dependencies and API specifications.

## Table of Contents
- [Function: item_update](#function-item_update)
- [Function: item_delete](#function-item_delete)
- [Function: request_approve](#function-request_approve)

## Function: item_update
Updates an existing item.

### Parameters
- `request`: The HTTP request object.
- `club_id`: The ID of the club.
- `item_id`: The ID of the item.

### Dependencies
- `can_user_access`: Checks if the user has access to update the item.
- `Item.objects.get`: Retrieves the item with the given ID.
- `Club.objects.get`: Retrieves the club with the given ID.
- `ItemForm`: Form for updating the item.

### API Specifications
None.

### Schema Tables
None.

## Function: item_delete
Deletes an item.

### Parameters
- `request`: The HTTP request object.
- `item_id`: The ID of the item.

### Dependencies
- `Item.objects.get`: Retrieves the item with the given ID.
- `can_user_access`: Checks if the user has access to delete the item.

### API Specifications
None.

### Schema Tables
None.

## Function: request_approve
Approves a request if there is sufficient quantity available.

### Parameters
- `request`: The HTTP request object.
- `request_id`: The ID of the request.

### Dependencies
- `Request.objects.get`: Retrieves the request with the given ID.
- `can_user_access`: Checks if the user has access to approve the request.

### API Specifications
None.

### Schema Tables
None.
# Code Documentation

This documentation provides an overview of the functions and their purpose in the given code.

## Table of Contents
- [Function: request_approve](#function-request_approve)
- [Function: request_reject](#function-request_reject)
- [Function: request_add](#function-request_add)

## Function: request_approve
```python
@login_required(login_url='login')
def request_approve(request, request_id):
    req = Request.objects.get(id=request_id)
    club_id = req.item.club.id
    
    if can_user_access(request.user.id, 'request_approve', club_id):
        if req.item.quantity >= req.qty:
            req.status = 'Approved'
            req.save()
            
            # Email the user about the approval
            try:
                send_mail(
                    'InvManage',
                    f'Congratulations! Your request for {req.qty} {req.item.item_name} has been approved by the Convener of {req.item.club.club_name}.',
                    settings.EMAIL_HOST_USER,
                    [req.requested_by.email],
                    fail_silently=False,
                )
            except:
                messages.info(request, 'The mail has not been sent. Please check your host connection.')
                
            messages.info(request, 'Request approved successfully!')
            return redirect(reverse('items_view', args=[club_id]))
        else:
            messages.info(request, 'Request cannot be approved - Insufficient Quantity')
            return redirect(reverse('items_view', args=[club_id]))
    else:
        return redirect('error_page')
```

### Description
This function is used to approve a request made by a user. It checks if the user has access to approve the request and if the requested quantity is available. If the conditions are met, it updates the request status to 'Approved' and sends an email notification to the user. Finally, it redirects the user to the items view page of the respective club.

### Dependencies
- `login_required` decorator
- `Request` model
- `can_user_access` function
- `send_mail` function
- `messages` module
- `settings.EMAIL_HOST_USER` configuration
- `redirect` function
- `reverse` function

### API Specs
None

## Function: request_reject
```python
@login_required(login_url='login')
def request_reject(request, request_id):
    req = Request.objects.get(id=request_id)
    club_id = req.item.club.id
# Developers Documentation

This documentation provides an overview of the code and its functions. It includes a brief introduction, table of contents, function explanations, dependencies, and API specifications (if present). The code is written in Python.

## Table of Contents
1. Introduction
2. Function: convener.values_list
3. Function: club_statistics
4. Function: error_page

## Introduction
The code provided contains three functions: `convener.values_list`, `club_statistics`, and `error_page`. These functions are used in a web application to manage requests for items in a club. The code includes login requirements and handles various operations related to requests and statistics. 

## Function: convener.values_list
This function is used to retrieve a list of values from the `user__email` field in the database. It takes two parameters: `user__email` and `flat`. The `user__email` parameter specifies the field to retrieve values from, and the `flat` parameter determines whether the values should be returned as a flat list. 

## Function: club_statistics
This function is used to display statistics for a club. It takes two parameters: `request` and `club_id`. The `request` parameter is an HTTP request object, and the `club_id` parameter specifies the ID of the club for which statistics are to be displayed. 

The function first checks if the user has access to view club statistics. If the user has access, the function retrieves the club object based on the `club_id`. It then retrieves a list of items and requests associated with the club. 

The function also groups the requests by item and calculates the count of requests for each item. It retrieves the choices for the status field and groups the requests by status, calculating the count for each status. 

The function returns a rendered HTML template with the retrieved data and context.

## Function: error_page
This function is used to display an error page. It takes one parameter: `request`, which is an HTTP request object. The function simply renders an HTML template for the error page.

## Dependencies
The code may have dependencies on external libraries or frameworks. Please ensure that the required dependencies are installed before running the code.

## API Specifications
There are no API specifications provided in the code.

## Schema Tables
There are no schema tables provided in the code.
