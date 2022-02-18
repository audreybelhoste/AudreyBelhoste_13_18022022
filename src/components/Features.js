import ChatIcon from '../assets/img/icon-chat.png'
import MoneyIcon from '../assets/img/icon-money.png'
import SecurityIcon from '../assets/img/icon-security.png'
import FeatureItem from './FeatureItem'

const Features = () => {
	return (
		<section class="features">
        <h2 class="sr-only">Features</h2>
				<FeatureItem 
					img={ChatIcon}
					alt='Chat Icon'
					title='You are our #1 priority'
					description='Need to talk to a representative? You can get in touch through our
					24/7 chat or through a phone call in less than 5 minutes.'
				/>
				<FeatureItem 
					img={MoneyIcon}
					alt='Money Icon'
					title='More savings means higher rates'
					description='The more you save with us, the higher your interest rate will be!'
				/>
				<FeatureItem 
					img={SecurityIcon}
					alt='Security Icon'
					title='Security you can trust'
					description='We use top of the line encryption to make sure your data and money
					is always safe.'
				/>
      </section>
	)
}

export default Features