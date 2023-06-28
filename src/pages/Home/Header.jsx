import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const HeaderStyled = ({ NAVBAR_HEIGHT }) => {
	const Header = styled.header`
		scroll-margin-top: ${NAVBAR_HEIGHT}px;
		border-width: 1px;
		min-height: calc(100vh - ${NAVBAR_HEIGHT}px);
	`;

	return (
		<Header id="header" className=" border-blue border-solid ">
			<h2 className="text-center">Header</h2>
			<p>
				<span>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
					provident id eveniet doloremque nihil veniam ratione consequuntur
					sapiente? Quia aliquid dolore qui incidunt, assumenda laudantium
					commodi voluptatem alias deserunt quae.
				</span>
				<span>
					Iusto optio exercitationem numquam commodi obcaecati vel sed ipsam
					quae est adipisci facilis fugiat dolore quod quia accusantium aperiam
					corporis, ad voluptates eius. Reiciendis dignissimos error nobis natus
					quia molestiae?
				</span>
			</p>
		</Header>
	);
};

HeaderStyled.propTypes = {
	NAVBAR_HEIGHT: PropTypes.number.isRequired,
};

export default HeaderStyled;
