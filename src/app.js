/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io"];

  function generateDomains(pronoun, adj, noun, extensions) {
    let domains = [];

    // Generate combinations with regular domain extensions
    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          for (let ext of extensions) {
            domains.push(p + a + n + ext);
          }
        }
      }
    }

    // Generate domain hacks (where the extension is part of the noun)
    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          for (let ext of extensions) {
            if (n.endsWith(ext.substring(1))) {
              let hack =
                p + a + n.substring(0, n.length - ext.length + 1) + ext;
              domains.push(hack);
            }
          }
        }
      }
    }

    return domains;
  }

  let domainList = generateDomains(pronoun, adj, noun, extensions);
  console.log(domainList);

  console.log("Hello Rigo from the console!");
};
