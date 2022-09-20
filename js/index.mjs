import "../css/style.css"

import {calculateTax} from "./tax.mjs";
import {formatCurrency} from "./utils.mjs"
import {displayAmount} from "./display.mjs";

const itemPrice = 50;
const tax = 15;
const itemPriceWithTax = calculateTax(itemPrice, tax);
const formattedItemPriceWithTax = formatCurrency(itemPriceWithTax,"kr" );

displayAmount(formattedItemPriceWithTax);
