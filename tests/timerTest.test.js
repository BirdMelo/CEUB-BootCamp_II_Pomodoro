/**
 * @jest-environment jsdom
 */

import { jest, describe, test, expect, beforeEach, afterEach } from '@jest/globals';

import { start, clearTimer, formatTime } from '../src/app/timer.js';

describe('Testes do Motor do Timer (timer.js)', () => {
    let btnMock;
    let onTickMock;
    let onCompleteMock;

    beforeEach(() => {
        document.body.innerHTML = `<button id="start-pause"><img src=""></button>`;
        btnMock = document.getElementById('start-pause');
        
        onTickMock = jest.fn();
        onCompleteMock = jest.fn();

        jest.useFakeTimers();
    });

    afterEach(() => {
        clearTimer();
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
        jest.clearAllMocks();
    });

    test('Deve diminuir o tempo em 1 segundo e chamar a função onTick', () => {
        const tempoInicial = 10;
        start(tempoInicial, onTickMock, onCompleteMock, btnMock);

        jest.advanceTimersByTime(1000);

        expect(onTickMock).toHaveBeenCalledWith(9);
        expect(onCompleteMock).not.toHaveBeenCalled();
    });

    test('Deve chamar onComplete e resetar o botão quando o tempo zerar', () => {
        const tempoInicial = 1;
        start(tempoInicial, onTickMock, onCompleteMock, btnMock);

        jest.advanceTimersByTime(1000);

        expect(onCompleteMock).toHaveBeenCalled();
        expect(btnMock.querySelector('img').getAttribute('src')).toBe('./assets/icons/play_arrow.png');
    });

    test('Deve formatar o tempo em segundos para HH:MM:SS corretamente', () => {
        const tempoFormatado = formatTime(1500);
        expect(tempoFormatado).toBe('00:25:00'); 
    });
});