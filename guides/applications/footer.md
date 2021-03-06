---
layout: guide
parent: "Applications"
title: "Footer"
intro: "All FPAC applications shall utilize a standard Footer based on the below specifications. The links in the below table are required for all applications. Additional links that are specific to individual applications can be appended in the appropriate category column."

---

## Footer Guidelines

The FPAC application footer is a multifacited feature that is designed to provide various levels of nagivational structure to meet the needs of the User. The columns are arranged from left to right to flow from more specific application links to more global navigation and contact options. Any additional links that are outlined in Business Requirements shall be placed in the appropriate column.


## Footer Column Structure

The footer has 4 columns:

 * First column represents links that are specifc for the application
 * Second column represents Agency links that are more relevant to the program
 * Third column represents general Agency links
 * Fourth column represents a global structure of links that also duplicate global links from the header

## Footer Example


<div style="overflow: hidden">
  <div class="fsa-footer">
    <div class="fsa-footer__bd">
      <div class="fsa-grid">
        <div class="fsa-footer__primary fsa-grid__1/1 fsa-grid__9/12@l">
          <div class="fsa-grid">
            <div class="fsa-grid__1/1 fsa-grid__1/3@m">
              <h3 class="fsa-footer__cat-header">Program Information</h3>
              <ul class="fsa-footer__list">
                <li class="fsa-footer__list-item"><a href="#" target="_blank">About XMPL</a></li>
                <li class="fsa-footer__list-item"><a href="#" target="_blank">XMPL - Handbook 1</a></li>
                <li class="fsa-footer__list-item"><a href="#" target="_blank">XMPL - Handbook 2</a></li>
              </ul>
            </div>
            <div class="fsa-grid__1/1 fsa-grid__1/3@m">
              <h3 class="fsa-footer__cat-header">Agency Guidelines</h3>
              <ul class="fsa-footer__list">
                <li class="fsa-footer__list-item"><a href="#" target="_blank">Publications</a></li>
                <li class="fsa-footer__list-item"><a href="#" target="_blank">Handbooks</a></li>
                <li class="fsa-footer__list-item"><a href="#" target="_blank">Notices</a></li>
                <li class="fsa-footer__list-item"><a href="#" target="_blank">FFAS Employee Forms</a></li>
                <li class="fsa-footer__list-item"><a href="#" target="_blank">Software Transmittals</a></li>
              </ul>
            </div>
            <div class="fsa-grid__1/1 fsa-grid__1/3@m">
              <h3 class="fsa-footer__cat-header">Resources</h3>
              <ul class="fsa-footer__list">
                <li class="fsa-footer__list-item"><a href="#" target="_blank">Inside FPAC</a></li>
                <li class="fsa-footer__list-item"><a href="#" target="_blank">Policies and Links</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="fsa-footer__secondary fsa-grid__1/1 fsa-grid__3/12@l">
          <ul class="fsa-footer__list fsa-footer__secondary-list">
            <li class="fsa-footer__list-item fsa-footer__secondary-list-item">
              <a class="fsa-btn fsa-footer__btn" href="#" target="_blank">Contact Us</a>
            </li>
            <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="tel:+8005551234" aria-label="FSA Telephone Number. 1. 800. 5 5 5. 1 2 3 4." target="_blank">1-800-555-1234</a></li>
            <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="//www.fsa.usda.gov/" target="_blank">FSA Website</a></li>
            <li class="fsa-footer__list-item fsa-footer__secondary-list-item"><a href="//www.usda.gov/" target="_blank">USDA Website</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<!--
<a href="{{ site.baseurl }}img/subcategories/applications/footer1.jpg" target="_blank"><img src="{{ site.baseurl }}img/subcategories/applications/footer1.jpg" alt="Example FSA application footer"></a>
-->

## Footer Required Links

Below is the list of recommended links that shall be used on all FPAC application footers. Based on the specific application and the Users, some of the below links will not be necessary or applicable.

<table class="fsa-table fsa-table--responsive">
    <thead>
        <tr>
            <th scope="col">Category</th>
            <th scope="col">Label</th>
            <th scope="col">URL</th>
            <th scope="col">Application Specific</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td aria-label="Category" scope="row">Program Information</td>
            <td aria-label="Label" scope="row">About [Application Name]</td>
            <td aria-label="URL" scope="row">[Application About Page URL]</td>
            <td></td>
        </tr>

        <tr>
            <td aria-label="Category" scope="row">Program Information</td>
            <td aria-label="Label" scope="row">[Application Name] Handbook</td>
            <td aria-label="URL" scope="row">[Application Specific Handbook URL]</td>
            <td><strong>X</strong></td>
        </tr>
        <tr>
            <td aria-label="Category" scope="row">Agency Guidelines</td>
            <td aria-label="Label" scope="row">Publications</td>
            <td aria-label="URL" scope="row">http://fsaintranet.sc.egov.usda.gov/fsa/FSAIntranet_newsroom.html</td>
            <td></td>
        </tr>

        <tr>
            <td aria-label="Category" scope="row">Agency Guidelines</td>
            <td aria-label="Label" scope="row">Handbooks</td>
            <td aria-label="URL" scope="row">http://fsaintranet.sc.egov.usda.gov/dam/handbooks/handbooks.asp</td>
            <td><strong>X</strong></td>
        </tr>
        <tr>
            <td aria-label="Category" scope="row">Agency Guidelines</td>
            <td aria-label="Label" scope="row">Notices</td>
            <td aria-label="URL" scope="row">https://www.fsa.usda.gov/FSA/notices?area=home&subject=lare&topic=not&setflag=FROMURL&getData=NONE"</td>
            <td></td>
        </tr>
        <tr>
            <td aria-label="Category" scope="row">Agency Guidelines</td>
            <td aria-label="Label" scope="row">Forms</td>
            <td aria-label="URL" scope="row">http://fsaintranet.sc.egov.usda.gov/dam/ffasforms/forms.html</td>
            <td></td>
        </tr>
        <tr>
            <td aria-label="Category" scope="row">Agency Guidelines</td>
            <td aria-label="Label" scope="row">Software Transmittals</td>
            <td aria-label="URL" scope="row">https://inside.fsa.usda.gov/operations/ocio/software-release-transmittals/</td>
            <td></td>
        </tr>
        <tr>
            <td aria-label="Category" scope="row">Resources</td>
            <td aria-label="Label" scope="row">Inside FSA</td>
            <td aria-label="URL" scope="row">https://inside.fsa.usda.gov/</td>
            <td></td>
        </tr>
        <tr>
            <td aria-label="Category" scope="row">Resources</td>
            <td aria-label="Label" scope="row">Policies and Links</td>
            <td aria-label="URL" scope="row">https://www.fsa.usda.gov/help/policies-and-links</td>
            <td></td>
        </tr>

        <tr>
            <td aria-label="Category" scope="row">Global</td>
            <td aria-label="Label" scope="row">Contact Us</td>
            <td aria-label="URL" scope="row">[URL to be determined]</td>
            <td></td>
        </tr>
        <tr>
            <td aria-label="Category" scope="row">Global</td>
            <td aria-label="Label" scope="row">[Phone Number]</td>
            <td aria-label="URL" scope="row">tel:[Phone Number]</td>
            <td><strong>X</strong></td>
        </tr>
        <tr>
            <td aria-label="Category" scope="row">Global</td>
            <td aria-label="Label" scope="row">FSA Website</td>
            <td aria-label="URL" scope="row">https://www.fsa.usda.gov/</td>
            <td></td>
        </tr>
        <tr>
            <td aria-label="Category" scope="row">Global</td>
            <td aria-label="Label" scope="row">USDA Website</td>
            <td aria-label="URL" scope="row">https://www.usda.gov/</td>
            <td></td>
        </tr>
    </tbody>
</table>

## Related Information

* [Global Footer Component]({{ site.baseurl }}components/footer)
