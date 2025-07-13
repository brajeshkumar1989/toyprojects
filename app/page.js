/** @format */

import { Label } from '@/components/ui/label';
import { TICACTOE } from './_component/cards/TICACTOE';

export default function Home() {
	return (
		<div className='box-border flex  flex-col '>
			<div className='flex justify-center p-6'>
				<Label htmlFor='Heading' className={'text-6xl'}>
					Tic-Tac-Toe
				</Label>
			</div>
			<div className='flex justify-center'>
				<TICACTOE />
			</div>
		</div>
	);
}
