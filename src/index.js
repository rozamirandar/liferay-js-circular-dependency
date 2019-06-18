/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent 
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */
import {filter as oDataFilter} from 'odata-v4-parser';

export default function main({portletNamespace, contextPath, portletElementId}) {

    const result = oDataFilter("Title eq 'Article1'");

    console.log(result);
    
    const node = document.getElementById(portletElementId);

    node.innerHTML =`
        <div>
            <span class="tag">Portlet Namespace:</span>
            <span class="value">${portletNamespace}</span>
        </div>
        <div>
            <span class="tag">Context Path:</span>
            <span class="value">${contextPath}</span>
        </div>
        <div>
            <span class="tag">Portlet Element Id:</span>
            <span class="value">${portletElementId}</span>
        </div>
        `;
    
}