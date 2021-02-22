using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Results.Utilities
{
    public class Result:IResult
    {

        public Result(bool success, string message):this(success)
        {
            this.Message = message;
        }
        public Result(bool success) 
        {
            this.Success = success;
        }
        public  bool Success { get; }
       public  string Message { get; }
    }
}
