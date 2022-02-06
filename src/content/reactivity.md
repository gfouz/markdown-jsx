---
title: Reactivity
author: Giovani Fouz Jiménez
description: Que es la reactividad y porque es tan importante...
img: image.jpg
date: febraury 5, 2022
---

![Tux, the Linux mascot](/images/typing.jpg)

## The non-reactive nature of JavaScript.

this  article, we’re going to look at reactivity in Vue, how it works,
and  how  we can create reactive variables using newly created methods
and  functions. This article is targeted at developers who have a good
understanding  of  how  Vue  2.x works and are looking to get familiar
with  the  new  Vue  3.  We’re  going to build a simple application to
better  understand  this  topic. The code for this app can be found on
GitHub.  By  default, JavaScript isn’t reactive. This means that if we
create the variable boy and reference it in part A of our application,
then  proceed to modify boy in part B, part A will not update with the
new value of boy.


```js
    let framework = 'Vue';
    let words = `${framework} is cool`;
    console.log(words)
    // logs "Vue is awesome"
    framework = 'React';
    console.log(words)
    //should log "React is awesome"
    // if 'words' were reactive.

```

## Reactive properties.

The  snippet  above is a perfect example of the non-reactive nature of
JavaScript  —  hence,  why  the change isn’t reflected in the sentence
variable. In Vue 2.x, props, computed, and data() were all reactive by
default, with the exception of properties that are not present in data
when  such components are created. This means that when a component is
injected into the DOM, only the existing properties in the component’s
data  object  would  cause  the  component  to update if and when such
properties  change.  Internally,  Vue  3  uses  the  Proxy  object (an
ECMAScript  6  feature)  to ensure that these properties are reactive,
but it still provides the option to use Object.defineProperty from Vue
2  for Internet Explorer support (ECMAScript 5). This method defines a
new  property  directly on an object, or modifies an existing property
on an object, and returns the object.

## Composition Api.

At  first  glance and since most of us already know that reactivity is
not  new  in  Vue,  it  might  seem  unnecessary  to make use of these
properties,  but  the  Options  API  has  its  limitations when you’re
dealing  with  a  large application with reusable functions in several
parts  of  the  application.  To this end, the new Composition API was
introduced to help with abstracting logic in order to make a code base
easier to read and maintain. Also, we can now easily make any variable
reactive  regardless  of its data type using any of the new properties
and  methods.  When we use the setup option, which serves as the entry
point  for  the Composition API, the data object, computed properties,
and  methods  are  inaccessible because the component instance has not
yet  been  created when setup is executed. This makes it impossible to
take  advantage of the built-in reactivity in any of these features in
setup.

