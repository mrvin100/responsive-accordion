/* main js file build by JeanDeo */
const accordionItems = document.querySelectorAll('.accordion_item')

//1. select the container item

accordionItems.forEach((item) =>{
	const accordionHeader = item.querySelector('.accordion_header')
	
//	2. select container when click on header
	accordionHeader.addEventListener('click', () =>{
//		7. create the variable
		const openItem = document.querySelector('.accordion-open')
		
//		5. link to a toggle function item
		toggleItem(item)
		
//		8. valid if class exist
		if(openItem && openItem!== item){
			toggleItem(openItem)
		}
	})
})

//3. create a constant type function
const toggleItem = (item) =>{
//	3.1 create variable
	const accordionContent = item.querySelector('.accordion_content')
	
//	6. if exist an other element who content the class accordion-open remove it
	if(item.classList.contains('accordion-open')){
		accordionContent.removeAttribute('style')
		item.classList.remove('accordion-open')
	}else{
//		4. put height to max height contain
		accordionContent.style.height = accordionContent.scrollHeight + 'px'
		item.classList.add('accordion-open');
	}
}










