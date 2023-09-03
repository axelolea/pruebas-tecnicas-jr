package test;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static problem.Problem.solution;


class ProblemTest {

    @Test
    void fiveConvertTen () {

        int n = 5;
        int expected = 10;

        assertEquals(
                solution(n), expected
        );

    }

    @Test
    void eightConvert26 () {

        int n = 8;
        int expected = 26;

        assertEquals(
                solution(n), expected
        );

    }

    @Test
    void twelveConvert41 () {

        int n = 12;
        int expected = 41;

        assertEquals(
                solution(n), expected
        );

    }

    @Test
    void fifteenConvert68 () {

        int n = 15;
        int expected = 68;

        assertEquals(
                solution(n), expected
        );

    }

    @Test
    void result14EqualsResult15 () {

        int n = 15;
        int n2 = 14;

        assertEquals(
                solution(n), solution(n2)
        );

    }

    @Test
    void thirtyConvert256 () {

        int n = 30;
        int expected = 256;

        assertEquals(
                solution(n), expected
        );

    }

}