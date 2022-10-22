#include <iostream>
using namespace std;

int main(){
    int a = 123;
    int max = 0;
    while(a!=0){
        if(max<(a%10)){
            max = a%10;
            a/=10;
        }
        else{
            a/=10;
        }
    }
    cout<<max<<endl;
}