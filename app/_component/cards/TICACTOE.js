/** @format */
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useEffect, useState } from 'react';

export function TICACTOE() {
	//to capture X or O where X=1, and O=0
	const [currentVal, setCurrentVal] = useState(Array(9).fill(0));

	//Tick Array , default is '' and contains only X , O or ''
	const [tickArray, setTickArray] = useState(Array(9).fill(''));

	//Tick : X or O
	const [tick, setTick] = useState('X');

	//Out of all possible win pattern select the current Win pattern if it is true
	const [patternindex, setPatternIndex] = useState([]);

	//this is to enable or disable each buttons
	const [flag, setflag] = useState(false);

	function checkWinner() {
		const winPattern = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		const isWinner = winPattern.some((pattern) => {
			pattern.every((index) => currentVal[index] === 1) ||
			pattern.every((index) => currentVal[index] === 2)
				? setPatternIndex(pattern)
				: setPatternIndex([]);
			return (
				pattern.every((index) => currentVal[index] === 1) ||
				pattern.every((index) => currentVal[index] === 2)
			);
		});

		setflag(isWinner);
	}

	useEffect(() => {
		checkWinner();
	}, [currentVal]);

	function handleClick(val, index) {
		if (currentVal[index] === 0) {
			const updated = [...currentVal];
			updated[index] = val;
			setCurrentVal(updated);
			const updatedTicked = [...tickArray];
			updatedTicked[index] = tick;
			setTickArray(updatedTicked);
			tick === 'X' ? setTick(() => 'O') : setTick(() => 'X');
		}
	}

	function handleReset() {
		setCurrentVal(Array(9).fill(0));
		setTickArray(Array(9).fill(''));
		setTick('X');
		setflag(false);
	}

	return (
		<Card className='w-full max-w-sm'>
			<CardContent>
				<div className='grid grid-cols-3 justify-items-center content-between gap-x-5 gap-y-1'>
					<div>
						{flag === false && tickArray.some((val) => val === '') ? (
							<Button
								type='submit'
								className=' p-13  text-8xl w-28  flex items-center justify-center '
								onClick={() => handleClick(tick === 'X' ? 1 : 2, 0)}
							>
								<p
									className={`flex items-center justify-center mb-3 ${
										flag === true &&
										Array.isArray(patternindex) &&
										patternindex.length > 0 &&
										patternindex.some((v) => v === 0)
											? 'text-yellow-500'
											: ''
									}`}
								>
									{currentVal[0] == 1 || currentVal[0] == 2 ? tickArray[0] : ''}
								</p>
							</Button>
						) : (
							<Button
								disabled
								type='submit'
								className=' p-13  text-8xl w-28  flex items-center justify-center '
								onClick={() => handleClick(0)}
							>
								<p
									className={`flex items-center justify-center mb-3 ${
										flag === true &&
										Array.isArray(patternindex) &&
										patternindex.length > 0 &&
										patternindex.some((v) => v === 0)
											? 'text-yellow-500'
											: ''
									}`}
								>
									{currentVal[0] == 1 || currentVal[0] == 2 ? tickArray[0] : ''}
								</p>
							</Button>
						)}
					</div>
					<div>
						{flag === false && tickArray.some((val) => val === '') ? (
							<Button
								variant={'outline'}
								type='submit'
								className=' p-13  text-8xl w-28  flex items-center justify-center '
								onClick={() => handleClick(tick === 'X' ? 1 : 2, 1)}
							>
								<p
									className={`flex items-center justify-center mb-3 ${
										flag === true &&
										Array.isArray(patternindex) &&
										patternindex.length > 0 &&
										patternindex.some((v) => v === 1)
											? 'text-yellow-500'
											: ''
									}`}
								>
									{currentVal[1] == 1 || currentVal[1] == 2 ? tickArray[1] : ''}
								</p>
							</Button>
						) : (
							<Button
								disabled
								variant={'outline'}
								type='submit'
								className=' p-13  text-8xl w-28  flex items-center justify-center '
								onClick={() => handleClick(1)}
							>
								<p
									className={`flex items-center justify-center mb-3 ${
										flag === true &&
										Array.isArray(patternindex) &&
										patternindex.length > 0 &&
										patternindex.some((v) => v === 1)
											? 'text-yellow-500'
											: ''
									}`}
								>
									{currentVal[1] == 1 || currentVal[1] == 2 ? tickArray[1] : ''}
								</p>
							</Button>
						)}
					</div>
					<div>
						{flag === false && tickArray.some((val) => val === '') ? (
							<Button
								type='submit'
								className=' p-13  text-8xl w-28  flex items-center justify-center '
								onClick={() => handleClick(tick === 'X' ? 1 : 2, 2)}
							>
								<p
									className={`flex items-center justify-center mb-3 ${
										flag === true &&
										Array.isArray(patternindex) &&
										patternindex.length > 0 &&
										patternindex.some((v) => v === 2)
											? 'text-yellow-500'
											: ''
									}`}
								>
									{currentVal[2] == 1 || currentVal[2] == 2 ? tickArray[2] : ''}
								</p>
							</Button>
						) : (
							<Button
								disabled
								type='submit'
								className=' p-13  text-8xl w-28  flex items-center justify-center '
								onClick={() => handleClick(2)}
							>
								<p
									className={`flex items-center justify-center mb-3 ${
										flag === true &&
										Array.isArray(patternindex) &&
										patternindex.length > 0 &&
										patternindex.some((v) => v === 2)
											? 'text-yellow-500'
											: ''
									}`}
								>
									{currentVal[2] == 1 || currentVal[2] == 2 ? tickArray[2] : ''}
								</p>
							</Button>
						)}
					</div>
					<div>
						{flag === false && tickArray.some((val) => val === '') ? (
							<Button
								variant={'outline'}
								type='submit'
								className=' p-13  text-8xl w-28  flex items-center justify-center '
								onClick={() => handleClick(tick === 'X' ? 1 : 2, 3)}
							>
								<p
									className={`flex items-center justify-center mb-3 ${
										flag === true &&
										Array.isArray(patternindex) &&
										patternindex.length > 0 &&
										patternindex.some((v) => v === 3)
											? 'text-yellow-500'
											: ''
									}`}
								>
									{currentVal[3] == 1 || currentVal[3] == 2 ? tickArray[3] : ''}
								</p>
							</Button>
						) : (
							<Button
								disabled
								variant={'outline'}
								type='submit'
								className=' p-13  text-8xl w-28  flex items-center justify-center '
								onClick={() => handleClick(3)}
							>
								<p
									className={`flex items-center justify-center mb-3 ${
										flag === true &&
										Array.isArray(patternindex) &&
										patternindex.length > 0 &&
										patternindex.some((v) => v === 3)
											? 'text-yellow-500'
											: ''
									}`}
								>
									{currentVal[3] == 1 || currentVal[3] == 2 ? tickArray[3] : ''}
								</p>
							</Button>
						)}
					</div>
					<div>
						{flag === false && tickArray.some((val) => val === '') ? (
							<Button
								type='submit'
								className=' p-13  text-8xl w-28  flex items-center justify-center '
								onClick={() => handleClick(tick === 'X' ? 1 : 2, 4)}
							>
								<p
									className={`flex items-center justify-center mb-3 ${
										flag === true &&
										Array.isArray(patternindex) &&
										patternindex.length > 0 &&
										patternindex.some((v) => v === 4)
											? 'text-yellow-500'
											: ''
									}`}
								>
									{currentVal[4] == 1 || currentVal[4] == 2 ? tickArray[4] : ''}
								</p>
							</Button>
						) : (
							<Button
								disabled
								type='submit'
								className=' p-13  text-8xl w-28  flex items-center justify-center '
								onClick={() => handleClick(4)}
							>
								<p
									className={`flex items-center justify-center mb-3 ${
										flag === true &&
										Array.isArray(patternindex) &&
										patternindex.length > 0 &&
										patternindex.some((v) => v === 4)
											? 'text-yellow-500'
											: ''
									}`}
								>
									{currentVal[4] == 1 || currentVal[4] == 2 ? tickArray[4] : ''}
								</p>
							</Button>
						)}
					</div>
					<div>
						{flag === false && tickArray.some((val) => val === '') ? (
							<Button
								variant={'outline'}
								type='submit'
								className=' p-13  text-8xl w-28  flex items-center justify-center '
								onClick={() => handleClick(tick === 'X' ? 1 : 2, 5)}
							>
								<p
									className={`flex items-center justify-center mb-3 ${
										flag === true &&
										Array.isArray(patternindex) &&
										patternindex.length > 0 &&
										patternindex.some((v) => v === 5)
											? 'text-yellow-500'
											: ''
									}`}
								>
									{currentVal[5] == 1 || currentVal[5] == 2 ? tickArray[5] : ''}
								</p>
							</Button>
						) : (
							<Button
								disabled
								variant={'outline'}
								type='submit'
								className=' p-13  text-8xl w-28  flex items-center justify-center '
								onClick={() => handleClick(5)}
							>
								<p
									className={`flex items-center justify-center mb-3 ${
										flag === true &&
										Array.isArray(patternindex) &&
										patternindex.length > 0 &&
										patternindex.some((v) => v === 5)
											? 'text-yellow-500'
											: ''
									}`}
								>
									{currentVal[5] == 1 || currentVal[5] == 2 ? tickArray[5] : ''}
								</p>
							</Button>
						)}
					</div>
					<div>
						{flag === false && tickArray.some((val) => val === '') ? (
							<Button
								type='submit'
								className=' p-13  text-8xl w-28  flex items-center justify-center '
								onClick={() => handleClick(tick === 'X' ? 1 : 2, 6)}
							>
								<p
									className={`flex items-center justify-center mb-3 ${
										flag === true &&
										Array.isArray(patternindex) &&
										patternindex.length > 0 &&
										patternindex.some((v) => v === 6)
											? 'text-yellow-500'
											: ''
									}`}
								>
									{currentVal[6] == 1 || currentVal[6] == 2 ? tickArray[6] : ''}
								</p>
							</Button>
						) : (
							<Button
								disabled
								type='submit'
								className=' p-13  text-8xl w-28  flex items-center justify-center '
								onClick={() => handleClick(6)}
							>
								<p
									className={`flex items-center justify-center mb-3 ${
										flag === true &&
										Array.isArray(patternindex) &&
										patternindex.length > 0 &&
										patternindex.some((v) => v === 6)
											? 'text-yellow-500'
											: ''
									}`}
								>
									{currentVal[6] == 1 || currentVal[6] == 2 ? tickArray[6] : ''}
								</p>
							</Button>
						)}
					</div>
					<div>
						{flag === false && tickArray.some((val) => val === '') ? (
							<Button
								variant={'outline'}
								type='submit'
								className=' p-13  text-8xl w-28  flex items-center justify-center '
								onClick={() => handleClick(tick === 'X' ? 1 : 2, 7)}
							>
								<p
									className={`flex items-center justify-center mb-3 ${
										flag === true &&
										Array.isArray(patternindex) &&
										patternindex.length > 0 &&
										patternindex.some((v) => v === 7)
											? 'text-yellow-500'
											: ''
									}`}
								>
									{currentVal[7] == 1 || currentVal[7] == 2 ? tickArray[7] : ''}
								</p>
							</Button>
						) : (
							<Button
								disabled
								variant={'outline'}
								type='submit'
								className=' p-13  text-8xl w-28  flex items-center justify-center '
								onClick={() => handleClick(7)}
							>
								<p
									className={`flex items-center justify-center mb-3 ${
										flag === true &&
										Array.isArray(patternindex) &&
										patternindex.length > 0 &&
										patternindex.some((v) => v === 7)
											? 'text-yellow-500'
											: ''
									}`}
								>
									{currentVal[7] == 1 || currentVal[7] == 2 ? tickArray[7] : ''}
								</p>
							</Button>
						)}
					</div>
					<div>
						{flag === false && tickArray.some((val) => val === '') ? (
							<Button
								type='submit'
								className=' p-13  text-8xl w-28  flex items-center justify-center '
								onClick={() => handleClick(tick === 'X' ? 1 : 2, 8)}
							>
								<p
									className={`flex items-center justify-center mb-3 ${
										flag === true &&
										Array.isArray(patternindex) &&
										patternindex.length > 0 &&
										patternindex.some((v) => v === 8)
											? 'text-yellow-500'
											: ''
									}`}
								>
									{currentVal[8] == 1 || currentVal[8] == 2 ? tickArray[8] : ''}
								</p>
							</Button>
						) : (
							<Button
								disabled
								type='submit'
								className=' p-13  text-8xl w-28  flex items-center justify-center '
								onClick={() => handleClick(8)}
							>
								<p
									className={`flex items-center justify-center mb-3 ${
										flag === true &&
										Array.isArray(patternindex) &&
										patternindex.length > 0 &&
										patternindex.some((v) => v === 8)
											? 'text-yellow-500'
											: ''
									}`}
								>
									{currentVal[8] == 1 || currentVal[8] == 2 ? tickArray[8] : ''}
								</p>
							</Button>
						)}
					</div>
				</div>
			</CardContent>
			<CardFooter className='flex-col gap-2'>
				<Button
					type='submit'
					className='w-full bg-linear-65 from-purple-500 to-pink-500'
					onClick={() => handleReset()}
				>
					Restart Game
				</Button>
				{flag === true &&
				Array.isArray(patternindex) &&
				patternindex.length === 3 ? (
					<div>
						<Label
							variant='outline'
							className='w-full flex justify-around text-5xl text-green-500'
						>
							{patternindex.some((val) => tickArray[val] === 'X')
								? 'X '
								: patternindex.some((val) => tickArray[val] === 'O')
								? 'O '
								: ''}
						</Label>
						<Label
							variant='outline'
							className='w-full flex justify-around text-3xl text-gray-500'
						>
							WINNER!
						</Label>
					</div>
				) : (
					<Label
						variant='outline'
						className='w-full flex justify-around text-3xl text-gray-500'
					>
						{tickArray.every((val) => val !== '') && 'DRAW!'}
					</Label>
				)}

				<Label
					variant='outline'
					className='w-full flex justify-right text-sm text-gray-500'
				>
					&#169; Brajesh Kumar
				</Label>
			</CardFooter>
		</Card>
	);
}
