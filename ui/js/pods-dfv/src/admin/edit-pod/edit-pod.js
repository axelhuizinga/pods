/* eslint-disable react/prop-types */
import React from 'react';

/* WordPress dependencies */
// noinspection JSUnresolvedVariable
const { __ } = wp.i18n;
//const { Modal } = wp.components;
const { withSelect, withDispatch } = wp.data;
const { compose } = wp.compose;

import { SaveStatusMessage } from 'pods-dfv/src/admin/edit-pod/save-status-message';
import { PodsDFVSluggable } from 'pods-dfv/src/admin/edit-pod/sluggable';
import { MainTabs } from 'pods-dfv/src/admin/edit-pod/main-tabs/main-tabs';
import { ActiveTabContent } from 'pods-dfv/src/admin/edit-pod/main-tabs/active-tab-content';
import { Postbox } from 'pods-dfv/src/admin/edit-pod/postbox';
import { STORE_KEY_EDIT_POD } from 'pods-dfv/src/admin/edit-pod/store/constants';

const AJAX_ACTION = 'pods_admin_proto';

export const PodsDFVEditPod = compose ( [
	withSelect( ( select ) => {
		return {
			state: select( STORE_KEY_EDIT_POD ).getState()
		};
	} ),
	withDispatch( ( dispatch ) => {
		return {
			setSaveStatus: dispatch( STORE_KEY_EDIT_POD ).setSaveStatus
		};
	} )
] )
( ( props ) => {
	const handleSubmit = ( e ) => {
		e.preventDefault();

		const requestData = {
			'id': props.podInfo.id,
			'name': props.podInfo.name,
			'old_name': props.podInfo.name,
			'_wpnonce': props.fieldConfig.nonce,
			'fields': props.fields
		};

		/*
		props.setSaveStatus( saveStatuses.SAVING );
		fetch( `${ajaxurl}?pods_ajax=1&action=${AJAX_ACTION}`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify( requestData )
		} )
		.then(
			( result ) => {
				console.log( result );
				props.setSaveStatus( saveStatuses.SAVE_SUCCESS );
			},
			( error ) => {
				console.log( error );
				props.setSaveStatus( saveStatuses.SAVE_ERROR );
			}
		);
		 */
	};

	return (
		<form className='pods-submittable pods-nav-tabbed' onSubmit={handleSubmit}>
			<div className='pods-submittable-fields'>
				<h2>
					{__( 'Edit Pod: ', 'pods' )}
					<PodsDFVSluggable
						value={props.podInfo.name}
						onChange={ ( e ) => setPodName( e.target.value ) }
					/>
				</h2>
				<SaveStatusMessage />
				<MainTabs />
			</div>
			<div id='poststuff'>
				<div id='post-body' className='meta-box-holder columns-2'>
					<ActiveTabContent />
					<Postbox />
				</div>
			</div>
		</form>
	);
} );
