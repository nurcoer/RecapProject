using Core.Entities;
using Core.Results.Utilities;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Core.Utilities.FileOperations
{
    public class FileOperations 
    {
       public static  string AddFile(IFormFile file)
        {
            var result = NewPath(file);
            try
            {
                var sourcepath = Path.GetTempFileName();
                if (file.Length > 0)
                    using (var stream = new FileStream(sourcepath, FileMode.Create))
                        file.CopyTo(stream);

                File.Move(sourcepath, result);
                return result;
            }
            catch (Exception exp)
            {

                return exp.Message;
            }

        }

        public static IResult UpdateFile(string sourcePath, IFormFile file)
        {
            var result = NewPath(file);

            try
            {
                if (sourcePath.Length > 0)
                {
                    using (var stream = new FileStream(result, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                }

                File.Delete(sourcePath);
                return new SuccessResult();
            }
            catch 
            {
                return new ErrorResult();
            }

            
        }

        public IResult DeleteFile(string path)
        {
            try
            {
                File.Delete(path);
                return new SuccessResult();
            }
            catch 
            {
                return new ErrorResult();
            }
        }

        public static string NewPath(IFormFile file)
        {
            FileInfo fileInfo = new FileInfo(file.FileName);
            string fileExtension = fileInfo.Extension;

            var guidFileName = Guid.NewGuid().ToString("N")
               + "_" + DateTime.Now.Month + "_"
               + DateTime.Now.Day + "_"
               + DateTime.Now.Year + fileExtension;

            string path = Path.Combine(Directory.GetParent(Directory.GetCurrentDirectory()).FullName + @"\CarImages");

            string result = $@"{path}\{guidFileName}";

            return result;
        }
    }
}
