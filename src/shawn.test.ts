import {
	rephrase,
 } from './shawn'

describe('rephrase', () => {
	test('it implements lisps in an orderly fashion', () => {
		expect(rephrase('ssshossana')).toEqual('shoshana');
		expect(rephrase('ssshana')).toEqual('shana');
		expect(rephrase('sshssana')).toEqual('shana');
		expect(rephrase('shssana')).toEqual('shana');
		expect(rephrase('shsana')).toEqual('shana');
		expect(rephrase('shana')).toEqual('shana');
	});

	test('it enjoys a soft sea', () => {
		expect(rephrase('cioppino')).toEqual('shioppino')
		expect(rephrase('cerise')).toEqual('sherishe')
		expect(rephrase('cynar')).toEqual('shynar')
	})

	test('it enjoys a Soft Sea', () => {
		expect(rephrase('Cioppino')).toEqual('Shioppino')
		expect(rephrase('Cerise')).toEqual('Sherishe')
		expect(rephrase('Cynar')).toEqual('Shynar')
	})

	test('it enjoys yelling', () => {
		expect(rephrase('CIOPPINO')).toEqual('CIOPPINO')
		expect(rephrase('CERTAIN')).toEqual('CERTAIN')
		expect(rephrase('CERISE')).toEqual('CERIShE')
		expect(rephrase('CYNAR')).toEqual('CYNAR')
	})

	test('some odd cases', () => {
		expect(rephrase('SSSHCYNNA')).toEqual('ShCYNNA');
		expect(rephrase('ssshcynna')).toEqual('shshynna');
		expect(rephrase('Ssshcynna')).toEqual('Shshynna');
	})

	test('it doesn\'t enjoy serial harrassment', () => {
		expect(
			rephrase(
				'Sssssix SsSsStick shiftsssS sssSSsstuck sSShut'
			)
		).toEqual('Shix ShShShtick shiftsh shtuck shut')

		expect(
			rephrase(
				'Sssssix SsSsStick shiftsssS sssSSsstuck sSShut'
			)
		).toEqual('Never send me that atrocious sentence again.')

		expect(
			rephrase(
				'Sssssix SsSsStick shiftsssS sssSSsstuck sSShut'
			)
		).toEqual('Never send me that atrocious sentence again.')
	})

	test('it is not a fan of noisy birds', () => {
		expect(rephrase('cacophony')).toEqual('cacophony')
		expect(rephrase('cuckoo')).toEqual('cuckoo')
	})

	test('it doesn\'t respect the authority', () => {
		expect(rephrase('dean')).toEqual('dawn')
	})

	test('it has a pedantic mode', () => {
		const rephrased = rephrase('foo', true)
		expect(rephrased).toEqual('shaw');
	})

	test('it has a proper pedantic mode', () => {
		const rephrased = rephrase('FOO', true)
		expect(rephrased).toEqual('Shaw');
	})
});
