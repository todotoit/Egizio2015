/**
 * Created by fabio on 14/03/15.
 */

module.exports.settings = {
	streaming: {
		url: 'http://wowza6.top-ix.org:8086',
		start: '/livestreamrecord?app=todotest&action=startRecording&streamname=streaming&outputFile=',
		stop: '/livestreamrecord?app=todotest&action=stopRecording&streamname=streaming&outputFile=',
		cdnUrl: 'http://cdn.top-ix.org/todo/',
		fileExt: '.mp4'
	},
	robot: {
		socket: null,
		status: null
	},
	redirect: 'http://compagnia.egizio2015.it/a_un_soffio_dalla_scoperta/'
}