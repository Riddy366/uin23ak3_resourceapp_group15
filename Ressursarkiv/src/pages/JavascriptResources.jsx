import React from 'react';
import { resources } from './resources';

export default function JavascriptResources(){
const JavascriptResources = resources.filter(resource => resource.category === "JavaScript");
console.log("Javascript", JavascriptResources)
}