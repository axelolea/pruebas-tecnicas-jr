import org.junit.jupiter.api.Test;

import static moneda.Solution.solution;
import static org.junit.jupiter.api.Assertions.assertEquals;

class SolutionTest {

    private final char x = 'x';
    private final char o = 'o';

    @Test
    void arraySinValores() {

        char[] arr = {};
        int expected = 0;
        assertEquals(
                solution(arr),
                expected
        );

    }

    @Test
    void arrayConUnValorCruz() {

        char[] arr = {x};
        int expected = 1;
        assertEquals(
                solution(arr),
                expected
        );

    }

    @Test
    void arrayConUnValorCara() {

        char[] arr = {o};
        int expected = 1;
        assertEquals(
                solution(arr),
                expected
        );

    }

    @Test
    void arrayCompletoConValoresCruz() {

        char[] arr = {x, x, x, x, x};
        int expected = 5;
        assertEquals(
                solution(arr),
                expected
        );

    }

    @Test
    void arrayCompletoConValoresCara() {

        char[] arr = {o, o, o};
        int expected = 3;
        assertEquals(
                solution(arr),
                expected
        );

    }

    @Test
    void arrayMitadCaraYMitadConCruz() {

        char[] arr = {o, x, x, o, x, o};
        int expected = 3;
        assertEquals(
                solution(arr),
                expected
        );

    }

    @Test
    void arrayNasValoresCruz() {

        char[] arr = {x, x, o, o, x};
        int expected = 3;
        assertEquals(
                solution(arr),
                expected
        );

    }

    @Test
    void arrayMasValoresCara() {

        char[] arr = {o, x, o, o, x, o, o};
        int expected = 5;
        assertEquals(
                solution(arr),
                expected
        );

    }

}