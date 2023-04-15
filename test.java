import java.util.*;

public class test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int s = sc.nextInt();
        int arr[] = new int[s];
        for (int i = 0; i < s; i++) {
            arr[i] = sc.nextInt();
        }
        int max = arr[0];
        for (int j = 1; j < s; j++) {
            if (max < arr[j])
                max = arr[j];
            else
                continue;

        }

        System.out.print(max);
    }

}