{
	let mobileTopBtn = document.querySelector('.header__mobile-btn');
	if(mobileTopBtn) {
		mobileTopBtn.addEventListener('click', function() {
			if(document.documentElement.clientWidth < 768) {
				this.classList.toggle('_active');
				_slideToggle(this.nextElementSibling);
			}
		})
	}
}
{
	let btn = document.querySelector('.header__switch-btn'); {
		if(btn) {
			btn.addEventListener('click', (e) => {
				if(document.documentElement.clientWidth < 992) {
					if(e.target.closest('.drop-menu')) return;
					btn.classList.toggle('active');
					btn.querySelector('.drop-menu').classList.toggle('active');
				}
			})

			document.body.addEventListener('click', (e) => {
				if(document.documentElement.clientWidth < 992) {
					if(!e.target.closest('.header__switch-btn')) {
						btn.classList.remove('active');
						btn.querySelector('.drop-menu').classList.remove('active');
					}
				}
			})
		}
	}
}

{
	let navMenu = document.querySelector('.header__menu-list');
	if(navMenu) {
		for(let item of navMenu.children) {
			let link = item.querySelector('a');
			
			link.addEventListener('click', function(e) {
				if(document.documentElement.clientWidth < 992) {
					console.log(this.nextElementSibling);
					if(this.nextElementSibling) { 
						if(!this.classList.contains('_active')) {
							e.preventDefault();
							this.classList.toggle('_active');
							_slideToggle(this.nextElementSibling); 
						}
						
					}

					for(let i of navMenu.children) {
						let link = i.querySelector('a');
						if( link == this) {
							continue;
						}
						if(link.nextElementSibling) {
							link.classList.remove('_active');
							_slideUp(link.nextElementSibling); 
						}
					}
				}
			})
		}
	}
}