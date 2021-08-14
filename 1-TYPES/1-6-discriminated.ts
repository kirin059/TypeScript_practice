{
  // function: login -> success, fail ⏱
  type SuccessState = {
    result: 'success';   // 동일한 키 추가 (공통적인 키)
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';   // 동일한 키 추가 (공통적인 키)
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function logins(): LoginState {
    return {
      result: 'success',  // result라는 키의 값이 'success'가 아니면 에러 (response가 뒤에 왔기 때문)
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
