import java.util.*;
public class calculator{
public static void main(String[] args) {
    int a=10; int b=20;
    Scanner sc=new Scanner(System.in);
    char ch=sc.nextLine().charAt(0);
    switch(ch){
        case '+':
            System.out.println(a+b);
            break;
            case '-':
                System.out.println(a-b);
                break;
                case '/':
                    if(b!=0){
                        System.out.println(a/b);
                    }
                    else{
                        System.out.println("Not divisble by 0");
                        break;
                    }
                    
                    case '*':
                        System.out.println(a*b);
                        break;
                        default:
                            System.out.println("Invalid input");
        }
    }
}